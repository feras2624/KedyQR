import { api } from "./api.js";

export async function saveMenu(menu) {
 //console.log(JSON.stringify(menu, null, 2));
    return api("/menu", {

        method: "PUT",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(menu, null, 2)

    });

   
}