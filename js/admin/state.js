import { updateSaveButton } from "./components/header.js";



export const state = {

    page: "dashboard",
    dirty: false,
    menu: null

};

export function markDirty() {

    if (state.dirty)
        return;

    state.dirty = true;

    updateSaveButton(true);

}

export function clearDirty() {

    state.dirty = false;

    updateSaveButton(false);

}