import { markDirty } from "../state.js";

export function Input(label, value = "", onInput = () => {}) {

    const wrapper = document.createElement("div");

    wrapper.className = "form-group";

    const lbl = document.createElement("label");

    lbl.textContent = label;

    const input = document.createElement("input");

    input.type = "text";

    input.value = value;
    input.required=true;

    input.oninput = e => {

        onInput(e.target.value);

        markDirty();

    };

    wrapper.append(
        lbl,
        input
    );

    return {

        element: wrapper,

        get value() {
            return input.value.trim();
        },

        set value(v) {
            input.value = v;
        },

        focus() {
            input.focus();
        },
        reportValidity() {
            return input.reportValidity();
        }

    };

}