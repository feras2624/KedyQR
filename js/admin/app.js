import { Header } from "./components/header.js";
import { Sidebar } from "./components/sidebar.js";
import { closeSidebar } from "./sidebar.js";
import { Dashboard } from "./pages/dashboard.js";
import { Restaurant } from "./pages/restaurant.js";
import { Categories } from "./pages/categories.js";
import { Items } from "./pages/items.js";
import { Themes } from "./pages/themes.js";
import { state,clearDirty } from "./state.js";
import { navigate,getCafeName } from "./router.js";
import { loadMenu } from "../api.js";

const pages = {

    dashboard: Dashboard,

    restaurant: Restaurant,

    categories: Categories,

    items: Items,

    themes: Themes

};

export function renderPage() {

    const main = document.getElementById("content");

    main.replaceChildren(

        pages[state.page]()

    );

}

export function save(){

    console.log(
        JSON.stringify(state.menu, null, 4)
    );
    clearDirty();
}


async function init() {
    const app = document.getElementById("app");

    const layout = document.createElement("div");

    layout.className = "layout";

    const sidebar = Sidebar();

    const backdrop = document.createElement("div");

    backdrop.id = "backdrop";

    backdrop.className = "backdrop";

    backdrop.onclick = closeSidebar;

    const content = document.createElement("main");

    content.id = "content";

    layout.append(

        sidebar,

        backdrop,

        content

    );

    app.append(

        Header(),

        layout

    );
    const cafe = getCafeName();
     state.menu = await loadMenu(cafe);
    
    renderPage();
}


init();


window.addEventListener("beforeunload", (event) => {

    if (!state.dirty)
        return;

    event.preventDefault();

    event.returnValue = "";

});