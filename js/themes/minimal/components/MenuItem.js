import { asset } from "../../../state.js";

export function MenuItem(item) {

    const article = document.createElement("article");

    article.className = "menu-item";

    const hasImage = !!item.image;

    article.innerHTML = `
        ${hasImage ? `
            <img
                class="item-image"
                src="${asset(item.image)}"
                alt="${item.name}"
            >
        ` : ""}

        <div class="item-content">

            <div class="item-header">

                <h3>${item.name}</h3>

                <span class="price">

                    ${item.price} ₺

                </span>

            </div>

            ${item.description
                ? `<p>${item.description}</p>`
                : ""}

        </div>
    `;

    return article;

}