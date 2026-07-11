import { getMenu, asset } from "../../../state.js";

export function Header() {

    const menu = getMenu();

    const header = document.createElement("header");

    header.className = "header";

    header.innerHTML = `

        <div class="newspaper-title">

            THE DAILY MENU

        </div>

        <div class="newspaper-line"></div>

        <div class="header-content">

            <img
                class="logo"
                src="${asset(menu.info.logo)}"
                alt="${menu.info.name}"
            >

            <div>

                <h1>${menu.info.name}</h1>

                <p class="description">

                    ${menu.info.description}

                </p>

            </div>

        </div>

        <div class="newspaper-line"></div>

    `;

    return header;

}