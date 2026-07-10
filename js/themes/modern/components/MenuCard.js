import { asset } from "../../../state.js";

export function MenuCard(item){

    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `

        <img src="${asset(item.image)}">

        <div class="content">

            <h3>${item.name}</h3>

            <p>${item.description}</p>

            <span>${item.price} TL</span>

        </div>

    `;

    return card;

}