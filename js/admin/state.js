import { updateSaveButton } from "./components/header.js";

import { getCafeName } from "../router.js";


export const state = {
    cafe: getCafeName(),
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

export function asset(path) {
    return `cafes/${state.cafe}/${path}`;
}