import { navigate } from "../router.js";
import { closeSidebar } from "../sidebar.js";

const pages = [

    ["dashboard", "🏠 Dashboard"],
    ["restaurant", "🏪 Restaurant"],
    ["categories", "📂 Categories"],
    ["items", "🍔 Items"],
    ["themes", "🎨 Theme"]

];

export function Sidebar() {

    const aside = document.createElement("aside");

    aside.className = "sidebar";

    aside.id = "sidebar";

    for (const [page, title] of pages) {

        const button = document.createElement("button");

        button.textContent = title;
        button.dataset.page = page;

        button.onclick = () => {

            navigate(page);

            closeSidebar();

        };

        aside.append(button);

    }

    return aside;

}

export function setActive(page) {

    document
        .querySelectorAll(".sidebar button")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.page === page
            );

        });

}