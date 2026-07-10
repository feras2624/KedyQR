export async function loadMenu(cafe) {

    const response =
    await fetch(`cafes/${cafe}/menu.json?v=${Date.now()}`, {
    cache: "no-store"
    });

    if (!response.ok)
        throw new Error("Menu not found.");

    return await response.json();

}