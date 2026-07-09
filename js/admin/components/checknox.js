import { markDirty } from "../state.js";

export function Checkbox(label, checked = false, onChange = () => {}) {

    const wrapper = document.createElement("label");
    wrapper.className = "checkbox-group";

    const input = document.createElement("input");

    input.type = "checkbox";
    input.checked = checked;

    const text = document.createElement("span");
    text.textContent = label;

    input.onchange = e => {

        onChange(e.target.checked);

        markDirty();

    };

    wrapper.append(
        input,
        text
    );

    return {

        element: wrapper,

        get value() {
            return input.checked;
        },

        set value(v) {
            input.checked = v;
        }

    };

}