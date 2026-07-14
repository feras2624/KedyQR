import { api } from "./api.js";

export async function uploadImage(file) {

    const token = localStorage.getItem("token");

    const form = new FormData();

    form.append("image", file);

    return api("/upload", {

        method: "POST",

        headers: {

            Authorization: `Bearer ${token}`

        },

        body: form

    });


}