import { getMenu } from "../../../state.js";

export function CategoryBar() {

    const menu = getMenu();

    const nav = document.createElement("nav");

    nav.className = "categories";

    for (const category of menu.categories) {

        const button = document.createElement("button");

        button.className = "category-btn";
        //button.dataset.category = category.id;
        button.id = `btn-${category.id}`;

        button.textContent = category.name;

        button.onclick = () => {

            const element = document.getElementById(category.id);

            if (!element)
                return;

            const y =
                element.getBoundingClientRect().top +
                window.scrollY -
                75;

            window.scrollTo({

                top: y,

                behavior: "smooth"

            });

        };

        nav.append(button);

    }

    return nav;

}