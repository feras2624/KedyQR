export function observeCategories() {

    const sections = document.querySelectorAll(".cat-title");

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                document
                    .querySelectorAll(".category-btn")
                    .forEach(button =>
                        button.classList.remove("active")
                    );

                const button = document.getElementById(

                    `btn-${entry.target.id}`

                );

                button?.classList.add("active");

            });

        },

        {

            threshold: .3,

            rootMargin: "-80px 0px -60% 0px"

        }

    );

    sections.forEach(section => observer.observe(section));

}