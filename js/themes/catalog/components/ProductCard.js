import { asset } from "../../../state.js";

export function ProductCard(item) {

    const card = document.createElement("article");

    card.className = "product-card";

    card.dataset.name =
        item.name.toLowerCase();

    card.dataset.description =
        item.description.toLowerCase();

    card.innerHTML = `

        <img
            class="product-image"
            src="${asset(item.image)}"
            alt="${item.name}"
        >

        <div class="product-content">

            <h3>${item.name}</h3>

            <p>

                ${item.description}

            </p>

            <span class="price">

                ₺${item.price}

            </span>

        </div>

    `;

    return card;

}