import { state } from "../state.js";
import { Select } from "../components/select.js";

const THEMES = [

    {

        value: "modern",

        label: "Modern",

        palettes: [

            {
                value: "light",
                label: "Light"
            },

            {
                value: "dark",
                label: "Dark"
            }

        ]

    },

    {

        value: "minimal",

        label: "Minimal",

        palettes: [

            {
                value: "light",
                label: "Light"
            },
            {
                value: "test",
                label: "test"
            },

            {
                value: "dark",
                label: "Dark"
            }

        ]

    },

    {

        value: "classic",

        label: "Classic",

        palettes: [

            {
                value: "light",
                label: "Light"
            }

        ]

    }

];

export function Themes() {

    const page = document.createElement("div");

    page.className = "page";

    const header = document.createElement("div");

    header.className = "page-header";

    const title = document.createElement("h1");

    title.textContent = "Themes";

    header.append(title);

    const palette = Select("Palette");

    const theme = Select(

        "Theme",

        THEMES,

        state.menu.theme.template,

        value => {

            state.menu.theme.template = value;

            updatePalette();

        }

    );

    function updatePalette() {

        const selected = THEMES.find(

            theme => theme.value === state.menu.theme.template

        );

        palette.setOptions(selected.palettes);

        if (

            !selected.palettes.some(

                p => p.value === state.menu.theme.palette

            )

        ) {

            state.menu.theme.palette =
                selected.palettes[0].value;

        }

        palette.value = state.menu.theme.palette;

    }

    palette.value = state.menu.theme.palette;

    palette.element
        .querySelector("select")
        .onchange = e => {

            state.menu.theme.palette = e.target.value;

        };

    updatePalette();

    page.append(

        header,

        theme.element,

        palette.element

    );

    return page;

}