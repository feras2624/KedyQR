
export async function loadMenu(cafe) {

    const response =
    await fetch(`https://api.github.com/repos/feras2624/KedyQR-Data/contents/${cafe}/menu.json?v=${Date.now()}`,         {

            headers: {

                Accept: "application/vnd.github.raw"

            },

            cache: "no-store"

        });

    if (!response.ok)
        throw new Error("Menu not found.");

    return await response.json();

}