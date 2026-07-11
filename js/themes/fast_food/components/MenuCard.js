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

            <h3>${item.name}</h3>

            <p>

                ${item.description}

            </p>

            <div class="item-footer">

                <span class="price">

                    ₺${item.price}

                </span>

            </div>

        </div>

    `;

    return card;

}