import { updateSaveButton } from "./components/header.js";

import { getCafeName } from "./router.js";

const DATA_URL = "https://raw.githubusercontent.com/feras2624/KedyQR-Data/refs/heads/main";

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
    return `${DATA_URL}/${state.cafe}/${path}`;
}