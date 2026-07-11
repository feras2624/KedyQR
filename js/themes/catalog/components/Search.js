export function Search() {

    const wrapper = document.createElement("div");

    wrapper.className = "search";

    wrapper.innerHTML = `

        <input
            id="catalog-search"
            type="search"
            placeholder="Search products..."
        >

    `;

    const input = wrapper.querySelector("input");

    input.addEventListener("input", () => {

        const value = input.value
            .trim()
            .toLowerCase();

        document
            .querySelectorAll(".product-card")
            .forEach(card => {

                const name =
                    card.dataset.name;

                const description =
                    card.dataset.description;

                card.style.display =
                    name.includes(value) ||
                    description.includes(value)
                        ? ""
                        : "none";

            });

        document
        .querySelectorAll(".catalog-section")
        .forEach(section => {

            const hasVisibleItems = [...section.querySelectorAll(".product-card")]
                .some(card => card.style.display !== "none");

            section.style.display = hasVisibleItems ? "" : "none";

        });

    });

    return wrapper;

}