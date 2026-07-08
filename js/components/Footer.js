import { getMenu } from "../state.js";

export function Footer() {

    const menu = getMenu();

    const footer = document.createElement("footer");

    footer.className = "footer";

    footer.innerHTML = `
        <div class="footer-info">

            <h3>${menu.info.name}</h3>

            <p>${menu.info.description}</p>

        </div>

        <div class="footer-contact">

            ${menu.info.address ?
                `<p>📍 ${menu.info.address}</p>` : ""}

            ${menu.info.phone ?
                `<p>📞 ${menu.info.phone}</p>` : ""}

            ${menu.info.instagram ?
                `<a href="${menu.info.instagram}" target="_blank">
                    📷 Instagram
                </a>` : ""}

        </div>

        <div class="footer-bottom">

            <span>Made with ❤️ by KedyQR Menu</span>

        </div>
    `;

    return footer;

}