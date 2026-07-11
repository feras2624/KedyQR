import { Header } from "./components/Header.js";
import { CategoryBar } from "./components/CategoryBar.js";
import { MenuList } from "./components/MenuList.js";
import { Footer } from "./components/Footer.js";

import { observeCategories } from "../../utils/observer.js";

export function render() {

    const app = document.getElementById("app");

    app.replaceChildren(

        Header(),

        CategoryBar(),

        MenuList(),

        Footer()

    );

    observeCategories();

}