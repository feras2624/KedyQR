import { markDirty } from "../state.js";


export function Input(label, value, onInput){

    const div = document.createElement("div");

    div.className = "form-group";

    const lbl = document.createElement("label");

    lbl.textContent = label;

    const input = document.createElement("input");

    input.value = value ?? "";

    input.oninput = e => {

    onInput(e.target.value);

    markDirty();

};

    div.append(

        lbl,

        input

    );

    return div;

}