import { api } from "./api.js";

export async function login(user, password) {

    return api("/login", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            user,

            password

        })

    });

}