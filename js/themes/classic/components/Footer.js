import { getMenu } from "../../../state.js";

export function Footer() {

    const menu = getMenu();

    const footer = document.createElement("footer");

    footer.className = "footer";

    footer.innerHTML = `

        <p>${menu.info.address}</p>

        <p>${menu.info.phone}</p>

    `;

    return footer;

}