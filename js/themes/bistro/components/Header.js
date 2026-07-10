import { getMenu, asset } from "../../../state.js";

export function Header() {

    const menu = getMenu();

    const header = document.createElement("header");

    header.className = "header";

    const logo = menu.info.logo
        ? `
            <img
                class="logo"
                src="${asset(menu.info.logo)}"
                alt="${menu.info.name}">
        `
        : "";

    header.innerHTML = `

        ${logo}

        <h1>${menu.info.name}</h1>

        <p class="description">
            ${menu.info.description}
        </p>

    `;

    return header;

}