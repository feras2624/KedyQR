import { uploadImage } from "../api/upload.js";
import { markDirty } from "../state.js";
import { asset } from "../state.js";
export function ImagePicker(image, onChange) {

    const container = document.createElement("div");

    container.className = "image-picker";



    const preview = document.createElement("img");

    preview.src = image;

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

            const result = await uploadImage(file);

            preview.src = asset(result.path);

            onChange(result.path);

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



    return container;

}