import { DATA_URL } from "./state.js"


// export async function loadMenu(cafe) {

//     const response =
//     await fetch(`${DATA_URL}/${cafe}/menu.json?v=${Date.now()}`, {
//     cache: "no-store"
//     });

//     if (!response.ok)
//         throw new Error("Menu not found.");

//     return await response.json();

// }


export async function loadMenu(cafe) {

    const response = await fetch(

        `https://api.github.com/repos/feras2624/KedyQR-Data/contents/${cafe}/menu.json`,

        {

            cache: "no-store"

        }

    );

    if (!response.ok)
        throw new Error("Menu not found.");

    const data = await response.json();

    const text = atob(

        data.content.replace(/\n/g, "")

    );

    return JSON.parse(text);

}