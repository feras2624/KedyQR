import { getMenu } from "../../../state.js";

import { MenuItem } from "./MenuItem.js";

export function MenuList() {

    const menu = getMenu();

    const container = document.createElement("main");

    container.className = "menu";

    menu.categories.forEach(category => {

        const items = menu.items.filter(

            item => item.category === category.id

        );

        if (!items.length)
            return;

        const section = document.createElement("section");

        section.className = "category-section";

        //section.id = category.id;

        const title = document.createElement("h2");
        title.id = category.id;
        title.className= "cat-title";

        title.textContent = category.name;

        section.append(title);

        items.forEach(item => {

            section.append(

                MenuItem(item)

            );

        });

        container.append(section);

    });

    return container;

}