import { markDirty } from "../state.js";

export function Select(label, options = [], value = "", onChange = () => {}) {

    const wrapper = document.createElement("div");
    wrapper.className = "form-group";

    const lbl = document.createElement("label");
    lbl.textContent = label;

    const select = document.createElement("select");

    options.forEach(option => {

        const opt = document.createElement("option");

        opt.value = option.value;
        opt.textContent = option.label;

        select.append(opt);

    });

    select.value = value;

    select.onchange = e => {

        onChange(e.target.value);

        markDirty();

    };

    wrapper.append(
        lbl,
        select
    );

    return {

        element: wrapper,

        get value() {
            return select.value;
        },

        set value(v) {
            select.value = v;
        },

        setOptions(options) {

            select.replaceChildren();

            options.forEach(option => {

                const opt = document.createElement("option");

                opt.value = option.value;
                opt.textContent = option.label;

                select.append(opt);

            });

        },

        focus() {
            select.focus();
        }

    };

}