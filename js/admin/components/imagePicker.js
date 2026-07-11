import { uploadImage } from "../api/upload.js";
import { markDirty } from "../state.js";
import { asset } from "../state.js";



async function optimizeMenuImage(file) {

    const image = await createImageBitmap(file);

    const canvas = document.createElement("canvas");

    const MAX = 600;

    let width = image.width;
    let height = image.height;

    if (width > height) {

        if (width > MAX) {

            height = height * MAX / width;
            width = MAX;

        }

    } else {

        if (height > MAX) {

            width = width * MAX / height;
            height = MAX;

        }

    }

    canvas.width = Math.round(width);
    canvas.height = Math.round(height);

    canvas
        .getContext("2d")
        .drawImage(image, 0, 0, canvas.width, canvas.height);

    const blob = await new Promise(resolve =>

        canvas.toBlob(

            resolve,

            "image/webp",

            0.8

        )

    );

    return new File(

        [blob],

        file.name.replace(/\.[^.]+$/, ".webp"),

        {

            type: "image/webp"

        }

    );

}


export function ImagePicker(image, onChange) {

    const container = document.createElement("div");

    container.className = "image-picker";



    const preview = document.createElement("img");

    preview.src = asset(image);
    let currentPath = image;
    preview.className = "image-preview";



    const input = document.createElement("input");

    input.type = "file";

    input.accept = "image/*";

    input.hidden = true;



    const button = document.createElement("button");

    button.type = "button";

    button.textContent = "Choose Image";



    button.onclick = () => input.click();

    preview.onclick = () => input.click();



    input.onchange = async () => {

        const file = input.files[0];

        if (!file)
            return;

        button.disabled = true;

        button.textContent = "Uploading...";

        try {

            const optimized = await optimizeMenuImage(file);

            const result = await uploadImage(optimized);

            preview.src = URL.createObjectURL(optimized);
            currentPath=result.path;
            onChange?.(result.path);

            markDirty();

        } catch (err) {

            alert(err);

        }

        button.disabled = false;

        button.textContent = "Choose Image";

    };



    container.append(

        preview,

        button,

        input

    );


return {

    element: container,

    get value() {

        return currentPath;

    }

};

}