import { getMenu } from "../../../state.js";
import { MenuCard } from "./MenuCard.js";

export function MenuList() {

    const menu = getMenu();

    const main = document.createElement("main");

    main.className = "menu";

    menu.categories.forEach(category => {

        const section = document.createElement("section");

        section.className = "category";

        const title = document.createElement("h2");

        title.className = "cat-title";

        title.id = category.id;

        title.textContent = category.name;

        section.append(title);

        menu.items
            .filter(item => item.category === category.id)
            .forEach(item => {

                section.append(

                    MenuCard(item)

                );

            });

        main.append(section);

    });

    return main;

}