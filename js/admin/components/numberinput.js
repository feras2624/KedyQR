import { markDirty } from "../state.js";

export function NumberInput(label, value = 0, onInput = () => {}) {

    const wrapper = document.createElement("div");
    wrapper.className = "form-group";

    const lbl = document.createElement("label");
    lbl.textContent = label;

    const input = document.createElement("input");

    input.type = "number";
    input.min = "1";
    input.step = "1";
    input.required=true;
    input.value = value;

    input.oninput = e => {

        onInput(Number(e.target.value));

        markDirty();

    };

    wrapper.append(
        lbl,
        input
    );

    return {

        element: wrapper,

        get value() {
            return Number(input.value);
        },

        set value(v) {
            input.value = v;
        },

        focus() {
            input.focus();
        }

    };

}