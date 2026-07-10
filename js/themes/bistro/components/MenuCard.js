export function MenuCard(item) {

    const card = document.createElement("article");

    card.className = "menu-card";

    card.innerHTML = `

        <div class="menu-header">

            <h3 class="item-name">

                ${item.name}

            </h3>

            <span class="price">

                ₺${item.price}

            </span>

        </div>

        ${
            item.description
                ? `
                    <p class="description">

                        ${item.description}

                    </p>
                `
                : ""
        }

    `;

    return card;

}