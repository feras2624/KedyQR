export function openSidebar() {

    document.getElementById("sidebar")
        .classList.add("open");

    document.getElementById("backdrop")
        .classList.add("show");

}

export function closeSidebar() {

    document.getElementById("sidebar")
        .classList.remove("open");

    document.getElementById("backdrop")
        .classList.remove("show");

}

export function toggleSidebar() {

    document.getElementById("sidebar")
        .classList.toggle("open");

    document.getElementById("backdrop")
        .classList.toggle("show");

}