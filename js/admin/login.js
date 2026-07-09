import { login } from "./api/auth.js";

const user = document.getElementById("user");
const password = document.getElementById("password");
const button = document.getElementById("login-btn");
const error = document.getElementById("error");

button.onclick = doLogin;

password.addEventListener("keydown", e => {

    if (e.key === "Enter") {

        doLogin();

    }

});

async function doLogin() {

    error.textContent = "";

    button.disabled = true;

    button.textContent = "Logging in...";

    try {

        const result = await login(

            user.value.trim(),

            password.value

        );

        localStorage.setItem(

            "token",

            result.token

        );

        localStorage.setItem(

            "project",

            result.project

        );

        location.href = `admin.html?cafe=${result.project}`;

    }

    catch {

        error.textContent = "Invalid username or password.";

    }

    finally {

        button.disabled = false;

        button.textContent = "Login";

    }

}