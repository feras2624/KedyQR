import { getMenu } from "../../../state.js";

export function Footer() {

    const menu = getMenu();

    const footer = document.createElement("footer");

    footer.className = "footer";

    footer.innerHTML = `

        <div class="newspaper-line"></div>

        <h3>${menu.info.name}</h3>

        <p>${menu.info.address}</p>

        <p>${menu.info.phone}</p>

        ${
            menu.info.instagram
                ? `<a href="${menu.info.instagram}" target="_blank">Instagram</a>`
                : ""
        }

        <div class="newspaper-line"></div>

    `;

    return footer;

}