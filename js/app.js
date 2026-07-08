import { getCafeName } from "./router.js";
import { loadMenu } from "./api.js";
import { setCafe, setMenu } from "./state.js";

async function init() {

    try {

        const cafe = getCafeName();

        setCafe(cafe);

        const menu = await loadMenu(cafe);

        setMenu(menu);
        document.documentElement.dataset.mode =
            menu.theme.palette ?? "light";
        const theme = await loadTheme(menu.theme.template);


        theme.render();

    } catch (err) {

        console.error(err);

    }

}

async function loadTheme(name) {

    // Load CSS
    const css = document.createElement("link");

    css.rel = "stylesheet";

    css.href = `./css/${name}.css`;

    document.head.append(css);

    // Load JS module
    return await import(`./themes/${name}.js`);

}

init();