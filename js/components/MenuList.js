import { getMenu } from "../state.js";

import { MenuCard } from "./MenuCard.js";

export function MenuList(){

    const menu = getMenu();

    const wrapper = document.createElement("section");

    wrapper.className = "menu";

    for(const category of menu.categories){

        const title = document.createElement("h2");

        title.id = category.id;

        title.textContent = category.name;

        wrapper.append(title);

        const items = menu.items.filter(

            item => item.category === category.id

        );

        for(const item of items)

            wrapper.append(

                MenuCard(item)

            );

    }

    return wrapper;

}