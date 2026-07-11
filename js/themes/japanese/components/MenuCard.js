import { asset } from "../../../state.js";

export function MenuCard(item) {

    const card = document.createElement("article");

    card.className = "menu-card";

    card.innerHTML = `

        <img
            class="item-image"
            src="${asset(item.image)}"
            alt="${item.name}"
        >

        <div class="item-content">

            <div class="item-header">

                <h3>${item.name}</h3>

                <span class="price">

                    ₺${item.price}

                </span>

            </div>

            <p>

                ${item.description}

            </p>

        </div>

    `;

    return card;

}