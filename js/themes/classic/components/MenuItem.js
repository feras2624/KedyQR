export function MenuItem(item) {

    const wrapper = document.createElement("div");

    wrapper.className = "menu-entry";

    wrapper.innerHTML = `

        <div class="menu-item">

            <span class="item-name">

                ${item.name}

            </span>

            <span class="dots"></span>

            <span class="price">

                ₺${item.price}

            </span>

        </div>

        ${
            item.description
                ? `<div class="description">${item.description}</div>`
                : ""
        }

    `;

    return wrapper;

}