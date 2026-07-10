import { getMenu, asset } from "../../../state.js";

export function Hero(){

    const menu = getMenu();

    const hero = document.createElement("section");

    hero.className = "hero";

    hero.innerHTML = `

        <img
            class="cover"
            src="${asset(menu.info.cover)}">

        <div class="overlay">

            <img
                class="logo"
                src="${asset(menu.info.logo)}">

            <h1>${menu.info.name}</h1>

            <p>${menu.info.description}</p>

        </div>

    `;

    return hero;

}