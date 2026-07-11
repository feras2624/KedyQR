import { getMenu, asset } from "../../../state.js";

export function Header() {

    const menu = getMenu();

    const header = document.createElement("header");

    header.className = "hero";

    header.innerHTML = `

        <img
            class="hero-cover"
            src="${asset(menu.info.cover)}"
            alt="${menu.info.name}"
        >

        <div class="hero-overlay">

            <div class="logo-frame">

                <img
                    class="hero-logo"
                    src="${asset(menu.info.logo)}"
                    alt="${menu.info.name}"
                >

            </div>

            <h1>${menu.info.name}</h1>

            <p>${menu.info.description}</p>

            <div class="gold-divider"></div>

        </div>

    `;

    return header;

}