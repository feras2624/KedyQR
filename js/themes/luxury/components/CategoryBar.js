import { getMenu } from "../../../state.js";

export function CategoryBar() {

    const menu = getMenu();

    const nav = document.createElement("nav");

    nav.className = "category-bar";

    menu.categories.forEach(category => {

        const button = document.createElement("button");

        button.className = "category-btn";

        button.id = `btn-${category.id}`;

        button.textContent = category.name.toUpperCase();

        button.onclick = () => {

            const section = document.getElementById(category.id);

            if (!section)
                return;

            const y =
                section.getBoundingClientRect().top +
                window.scrollY -
                90;

            window.scrollTo({

                top: y,

                behavior: "smooth"

            });

        };

        nav.append(button);

    });

    return nav;

}