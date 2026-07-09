import { markDirty } from "../state.js";



export function Textarea(label, value, onInput){

    const div = document.createElement("div");

    div.className = "form-group";

    const lbl = document.createElement("label");

    lbl.textContent = label;

    const textarea = document.createElement("textarea");

    textarea.rows = 4;

    textarea.value = value ?? "";

    textarea.oninput = e => {
    
        onInput(e.target.value);
    
        markDirty();
    
    };
    
    div.append(

        lbl,

        textarea

    );

    return div;

}