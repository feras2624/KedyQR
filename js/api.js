export async function loadMenu(cafe) {

    const response =
        await fetch(`/cafes/${cafe}/menu.json`);

    if (!response.ok)
        throw new Error("Menu not found.");

    return await response.json();

}