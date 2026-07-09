import { state, markDirty } from "../state.js";
import { renderPage } from "../app.js";

import { openModal, closeModal } from "../components/modal.js";

import { Input } from "../components/input.js";
import { Textarea } from "../components/textarea.js";
import { NumberInput } from "../components/numberinput.js";
import { Select } from "../components/select.js";
import { ImagePicker } from "../components/imagePicker.js";


import { asset } from "../state.js";

export function Items() {

    const page = document.createElement("div");
    page.className = "page";

    /* -------------------------------------------------- */

    const header = document.createElement("div");
    header.className = "page-header";

    const title = document.createElement("h1");
    title.textContent = "Items";

    const add = document.createElement("button");
    add.className = "primary";
    add.textContent = "+ Add Item";
    add.onclick = showAddModal;

    header.append(title, add);

    page.append(header);

    /* -------------------------------------------------- */

    const list = document.createElement("div");
    list.className = "item-list";

    state.menu.items.forEach(item => {

        list.append(createRow(item));

    });

    page.append(list);

    return page;
}

/* ====================================================== */

function createRow(item){

    const row = document.createElement("div");
    row.className = "item-row";

    const image = document.createElement("img");
    image.src = asset(item.image);
    image.className = "item-image";

    image.onerror = () => {

        image.src = "assets/placeholder.jpg";

    };

    const info = document.createElement("div");
    info.className = "item-info";

    const name = document.createElement("h3");
    name.textContent = item.name;

    const category = document.createElement("div");
    category.className = "item-category";

    const cat = state.menu.categories.find(c => c.id === item.category);

    category.textContent = cat ? cat.name : "Unknown Category";

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("strong");
    price.textContent = item.price + " ₺";

    info.append(
        name,
        category,
        description,
        price
    );

    const actions = document.createElement("div");
    actions.className = "item-actions";

    const edit = document.createElement("button");
    edit.textContent = "✏️";
    edit.onclick = () => showEditModal(item);

    const remove = document.createElement("button");
    remove.textContent = "🗑️";
    remove.onclick = () => showDeleteModal(item);

    actions.append(
        edit,
        remove
    );

    row.append(
        image,
        info,
        actions
    );

    return row;

}

/* ====================================================== */

function categoryOptions(){

    return state.menu.categories.map(category => ({

        value: category.id,

        label: category.name

    }));

}

/* ====================================================== */

function showAddModal(){

    const name = Input("Name");

    const description = Textarea("Description");

    const price = NumberInput("Price", 0);

    const category = Select(

        "Category",

        categoryOptions()

    );

const image = ImagePicker(

    item.image,

    value => {

        item.image = value;

    }

);

    const body = document.createElement("div");

    body.append(

        name.element,

        description.element,

        price.element,

        category.element,

        image.element

    );

    openModal({

        title: "Add Item",

        content: body,

        actions: [

            {

                label: "Cancel",

                className: "secondary",

                onClick: closeModal

            },

            {

                label: "Save",

                className: "primary",

                onClick(){

                    if(!name.value)
                        return;

                    state.menu.items.push({

                        id: crypto.randomUUID(),

                        category: category.value,

                        name: name.value,

                        description: description.value,

                        price: price.value,

                        image: image.value

                    });

                    markDirty();

                    closeModal();

                    renderPage();

                }

            }

        ]

    });

}

/* ====================================================== */

function showEditModal(item){

    const name = Input("Name", item.name);

    const description = Textarea(

        "Description",

        item.description

    );

    const price = NumberInput(

        "Price",

        item.price

    );

    const category = Select(

        "Category",

        categoryOptions(),

        item.category

    );

const image = ImagePicker(

    item.image,

    value => {

        item.image = value;

    }

);

    const body = document.createElement("div");

    body.append(

        name.element,

        description.element,

        price.element,

        category.element,

        image.element

    );

    openModal({

        title: "Edit Item",

        content: body,

        actions:[

            {

                label:"Cancel",

                className:"secondary",

                onClick:closeModal

            },

            {

                label:"Save",

                className:"primary",

                onClick(){

                    item.name = name.value;

                    item.description = description.value;

                    item.price = price.value;

                    item.category = category.value;

                    //item.image = image.value;

                    markDirty();

                    closeModal();

                    renderPage();

                }

            }

        ]

    });

}

/* ====================================================== */

function showDeleteModal(item){

    const body = document.createElement("div");

    body.innerHTML = `

        <p>Delete <b>${item.name}</b> ?</p>

    `;

    openModal({

        title:"Delete Item",

        content:body,

        actions:[

            {

                label:"Cancel",

                className:"secondary",

                onClick:closeModal

            },

            {

                label:"Delete",

                className:"danger",

                onClick(){

                    state.menu.items = state.menu.items.filter(

                        i => i.id !== item.id

                    );

                    markDirty();

                    closeModal();

                    renderPage();

                }

            }

        ]

    });

}




/*import { state, markDirty } from "../state.js";
import { renderPage } from "../app.js";

import { openModal, closeModal } from "../components/modal.js";

import { Input } from "../components/input.js";
import { Textarea } from "../components/textarea.js";
import { Select } from "../components/select.js";
import { NumberInput } from "../components/numberinput.js";
import { Checkbox } from "../components/checkbox.js";

export function Items() {

    const page = document.createElement("div");
    page.className = "page";


    const header = document.createElement("div");
    header.className = "page-header";

    const title = document.createElement("h1");
    title.textContent = "Items";

    const add = document.createElement("button");
    add.className = "primary";
    add.textContent = "+ Add Item";
    add.onclick = showAddModal;

    header.append(title, add);

    page.append(header);


    const list = document.createElement("div");
    list.className = "item-list";

    state.menu.items.forEach(item => {

        list.append(createRow(item));

    });

    page.append(list);

    return page;

}


function createRow(item) {

    const row = document.createElement("div");
    row.className = "item-row";


    const image = document.createElement("img");

    image.className = "item-thumb";

    image.src = item.image;

    image.onerror = () => {

        image.src = "assets/items/placeholder.jpg";

    };


    const info = document.createElement("div");
    info.className = "item-info";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const category = document.createElement("small");

    category.textContent =
        state.menu.categories.find(c => c.id === item.category)?.name ??
        "Unknown";

    const description = document.createElement("p");
    description.textContent = item.description;

    info.append(
        title,
        category,
        description
    );


    const price = document.createElement("div");
    price.className = "item-price";
    price.textContent = item.price + " ₺";


    const actions = document.createElement("div");

    const edit = document.createElement("button");
    edit.textContent = "✏️";
    edit.onclick = () => showEditModal(item);

    const remove = document.createElement("button");
    remove.textContent = "🗑️";
    remove.onclick = () => showDeleteModal(item);

    actions.append(edit, remove);

    row.append(

        image,

        info,

        price,

        actions

    );

    return row;

}


function showAddModal() {

    const name = Input("Name");

    const description = Textarea("Description");

    const price = NumberInput("Price", 0);

    const category = Select(

        "Category",

        state.menu.categories.map(c => ({

            value: c.id,

            label: c.name

        }))

    );

    const available = Checkbox("Available", true);

    const featured = Checkbox("Featured", false);

    openModal({

        title: "Add Item",

        render(body) {

            body.append(

                name.element,

                description.element,

                price.element,

                category.element,

                available.element,

                featured.element

            );

        },

        actions: [

            {

                label: "Cancel",

                className: "secondary",

                onClick: closeModal

            },

            {

                label: "Save",

                className: "primary",

                onClick() {

                    if (!name.value)
                        return;

                    state.menu.items.push({

                        id: crypto.randomUUID(),

                        name: name.value,

                        description: description.value,

                        price: price.value,

                        category: category.value,

                        image: "assets/items/placeholder.jpg",

                        available: available.value,

                        featured: featured.value

                    });

                    markDirty();

                    closeModal();

                    renderPage();

                }

            }

        ]

    });

}


function showEditModal(item) {

    const name = Input("Name", item.name);

    const description = Textarea("Description", item.description);

    const price = NumberInput("Price", item.price);

    const category = Select(

        "Category",

        state.menu.categories.map(c => ({

            value: c.id,

            label: c.name

        })),

        item.category

    );

    const available = Checkbox("Available", item.available);

    const featured = Checkbox("Featured", item.featured);

    openModal({

        title: "Edit Item",

        render(body) {

            body.append(

                name.element,

                description.element,

                price.element,

                category.element,

                available.element,

                featured.element

            );

        },

        actions: [

            {

                label: "Cancel",

                className: "secondary",

                onClick: closeModal

            },

            {

                label: "Save",

                className: "primary",

                onClick() {

                    item.name = name.value;
                    item.description = description.value;
                    item.price = price.value;
                    item.category = category.value;
                    item.available = available.value;
                    item.featured = featured.value;

                    markDirty();

                    closeModal();

                    renderPage();

                }

            }

        ]

    });

}


function showDeleteModal(item) {

    const body = document.createElement("div");

    body.innerHTML = `

        <p>Delete <b>${item.name}</b> ?</p>

    `;

    openModal({

        title: "Delete Item",

        content: body,

        actions: [

            {

                label: "Cancel",

                className: "secondary",

                onClick: closeModal

            },

            {

                label: "Delete",

                className: "danger",

                onClick() {

                    state.menu.items =
                        state.menu.items.filter(i => i.id !== item.id);

                    markDirty();

                    closeModal();

                    renderPage();

                }

            }

        ]

    });

}*/