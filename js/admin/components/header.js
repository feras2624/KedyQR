import { toggleSidebar } from "../sidebar.js";
import { save } from "../app.js";


let saveButton;

export function Header() {

    const header = document.createElement("header");

    header.className = "admin-header";

    header.innerHTML = `

        <div class="header-left">

            <button id="menu-btn">☰</button>

            <h2>KedyQR Admin</h2>

        </div>

        <button id="save-btn">
            ✓ Saved
        </button>
        <button class="danger" id="logout-btn">
            Logout
        </button>

    `;

    header.querySelector("#menu-btn").onclick = toggleSidebar;
    header.querySelector("#logout-btn").onclick=logout;
    saveButton = header.querySelector("#save-btn");
    saveButton.onclick = save;
    return header;
}

export function updateSaveButton(dirty) {

    if (!saveButton) return;

    if (dirty) {

        saveButton.textContent = "💾 Save Changes";
        saveButton.classList.add("dirty");

    } else {

        saveButton.textContent = "✓ Saved";
        saveButton.classList.remove("dirty");

    }

}

function logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("project");

        location.href = "login.html";
    }