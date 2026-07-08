import { state } from "./state.js";

import { renderPage } from "./app.js";
import { setActive } from "./components/sidebar.js";

export function navigate(page) {

    state.page = page;

    renderPage();
    setActive(page)

}

export function getCafeName() {

    const params = new URLSearchParams(location.search);

    if (params.has("cafe"))
        return params.get("cafe");

    const host = location.hostname;

    if (
        host === "localhost" ||
        host === "127.0.0.1"
    )
        return "demo";

    return host.split(".")[0];

}

