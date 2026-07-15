import { asset } from "../../../state.js";

export function MenuCard(item) {

    const card = document.createElement("article");

    card.className = "menu-card";

    card.innerHTML = `

        <div class="item-preview">

            <div class="item-header">

                <h3>${item.name}</h3>


            </div>

            <button class="read-more">

                Continue Reading →

            </button>

        </div>

        <div class="article">

            <img
                class="item-image"
                src="${asset(item.image)}"
                alt="${item.name}"
            >

            <h3>${item.name}</h3>

            <p class="article-text">

                ${item.description}

            </p>

            <div class="article-price">

                ₺${item.price}

            </div>

            <button class="close-article">

                Close Article

            </button>

        </div>

    `;

    const article = card.querySelector(".article");

    card.querySelector(".read-more").onclick = () => {

        article.classList.add("open");

    };

    card.querySelector(".close-article").onclick = () => {

        article.classList.remove("open");

    };

    return card;

}