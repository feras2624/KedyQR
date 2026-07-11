import { Header } from "./components/Header.js";
import { Search } from "./components/Search.js";
import { CategoryBar } from "./components/CategoryBar.js";
import { ProductGrid } from "./components/ProductGrid.js";
import { Footer } from "./components/Footer.js";

import { observeCategories } from "../../utils/observer.js";

export function render() {

    const app = document.getElementById("app");

    app.replaceChildren(

        Header(),

        Search(),

        CategoryBar(),

        ProductGrid(),

        Footer()

    );

    observeCategories();

}