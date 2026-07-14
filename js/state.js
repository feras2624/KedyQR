export const DATA_URL = "https://raw.githubusercontent.com/feras2624/KedyQR-Data/main";


let state = {
    cafe: "",
    menu: null
};

export function setCafe(cafe) {
    state.cafe = cafe;
}

export function getCafe() {
    return state.cafe;
}

export function setMenu(menu) {
    state.menu = menu;
}

export function getMenu() {
    return state.menu;
}

export function asset(path) {
    return `${DATA_URL}/${state.cafe}/${path}?v=${Date.now()}`;
}