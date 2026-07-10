import { getMenu } from "../../../state.js";
import { MenuItem } from "./MenuItem.js";

export function MenuList() {

    const menu = getMenu();

    const container = document.createElement("main");

    container.className = "menu";

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

            .forEach(item =>

                section.append(

                    MenuItem(item)

                )

            );

        container.append(section);

    });

    return container;

}