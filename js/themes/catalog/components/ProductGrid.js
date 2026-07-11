import { getMenu } from "../../../state.js";
import { ProductCard } from "./ProductCard.js";

export function ProductGrid() {

    const menu = getMenu();

    const main = document.createElement("main");

    main.className = "catalog";

    menu.categories.forEach(category => {

        const section = document.createElement("section");

        section.className = "catalog-section";

        const title = document.createElement("h2");

        title.className = "cat-title";

        title.id = category.id;

        title.textContent = category.name;

        section.append(title);

        const grid = document.createElement("div");

        grid.className = "product-grid";

        menu.items
            .filter(item => item.category === category.id)
            .forEach(item => {

                grid.append(

                    ProductCard(item)

                );

            });

        section.append(grid);

        main.append(section);

    });

    return main;

}