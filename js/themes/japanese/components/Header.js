import { getMenu, asset } from "../../../state.js";

export function Header() {

    const menu = getMenu();

    const header = document.createElement("header");

    header.className = "header";

    header.innerHTML = `

        <img
            class="logo"
            src="${asset(menu.info.logo)}"
            alt="${menu.info.name}"
        >

        <h1>${menu.info.name}</h1>

        <p>${menu.info.description}</p>

        <div class="divider"></div>

    `;

    return header;

}