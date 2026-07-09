import { api } from "./api.js";

export async function uploadImage(file) {

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0IjoiZGVtb19saWdodCIsImlhdCI6MTc4MzYyODI5MiwiZXhwIjoxNzg2MjIwMjkyfQ.CsUswBItrqqgH-EPOFAMklIo56jjinfrTY8smfO-xPA";//localStorage.getItem("token");

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