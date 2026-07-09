import { state, markDirty } from "../state.js";
import { renderPage } from "../app.js";
import { openModal, closeModal } from "../components/modal.js";
import { Input } from "../components/input.js";

let draggedIndex = null;

export function Categories() {

    const page = document.createElement("div");
    page.className = "page";

    /* ---------- Header ---------- */

    const header = document.createElement("div");
    header.className = "page-header";

    const title = document.createElement("h1");
    title.textContent = "Categories";

    const add = document.createElement("button");
    add.className = "primary";
    add.textContent = "+ Add Category";
    add.onclick = showAddModal;

    header.append(title, add);

    page.append(header);

    /* ---------- List ---------- */

    const list = document.createElement("div");
    list.className = "category-list";

    state.menu.categories.forEach((category, index) => {

        list.append(createRow(category, index));

    });

    page.append(list);

    return page;
}

/* ================================================= */

function createRow(category, index) {

    const row = document.createElement("div");
    row.className = "category-row";

    /* ---------- Left ---------- */

    const left = document.createElement("div");
    left.className = "category-left";

    const handle = document.createElement("span");
    handle.className = "drag-handle";
    handle.textContent = "☰";
    handle.draggable = true;

    const name = document.createElement("span");
    name.textContent = category.name;

    left.append(handle, name);

    /* ---------- Right ---------- */

    const right = document.createElement("div");

    const edit = document.createElement("button");
    edit.textContent = "✏️";
    edit.onclick = () => showEditModal(category);

    const remove = document.createElement("button");
    remove.textContent = "🗑️";
    remove.onclick = () => showDeleteModal(category);

    right.append(edit, remove);

    row.append(left, right);

    /* ---------- Drag ---------- */

    handle.ondragstart = e => {

        draggedIndex = index;

        row.classList.add("dragging");

        e.dataTransfer.effectAllowed = "move";

    };

    handle.ondragend = () => {

        draggedIndex = null;

        document.querySelectorAll(".drag-over").forEach(el =>
            el.classList.remove("drag-over")
        );

        document.querySelectorAll(".dragging").forEach(el =>
            el.classList.remove("dragging")
        );

    };

    row.ondragover = e => {

        e.preventDefault();

        row.classList.add("drag-over");

    };

    row.ondragleave = () => {

        row.classList.remove("drag-over");

    };

    row.ondrop = e => {

        e.preventDefault();

        row.classList.remove("drag-over");

        if (draggedIndex === null)
            return;

        if (draggedIndex === index)
            return;

        const moved = state.menu.categories.splice(draggedIndex, 1)[0];

        state.menu.categories.splice(index, 0, moved);

        draggedIndex = null;

        markDirty();

        renderPage();

    };

    return row;
}

/* ================================================= */

function showAddModal() {

    const input = Input("Category Name");

    openModal({

        title: "Add Category",

        content: input.element,

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

                    if (!input.value)
                        return;

                    state.menu.categories.push({

                        id: crypto.randomUUID(),

                        name: input.value

                    });

                    markDirty();

                    closeModal();

                    renderPage();

                }

            }

        ]

    });

    input.focus();

}

/* ================================================= */

function showEditModal(category) {

    const input = Input("Category Name", category.name);

    openModal({

        title: "Edit Category",

        content: input.element,

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

                    if (!input.value)
                        return;

                    category.name = input.value;

                    markDirty();

                    closeModal();

                    renderPage();

                }

            }

        ]

    });

    input.focus();

}

/* ================================================= */

function showDeleteModal(category) {

    const used = state.menu.items.some(item =>
        item.category === category.id
    );

    const body = document.createElement("div");

    if (used) {

        body.innerHTML = `
            <p>This category still contains products.</p>
            <p>Move or delete them first.</p>
        `;

    } else {

        body.innerHTML = `
            <p>Delete <b>${category.name}</b>?</p>
        `;

    }

    openModal({

        title: "Delete Category",

        content: body,

        actions: [

            {
                label: "Cancel",
                className: "secondary",
                onClick: closeModal
            },

            ...(!used ? [{

                label: "Delete",

                className: "danger",

                onClick() {

                    state.menu.categories = state.menu.categories.filter(
                        c => c.id !== category.id
                    );

                    markDirty();

                    closeModal();

                    renderPage();

                }

            }] : [])

        ]

    });

}












/*import { state, markDirty } from "../state.js";
import { renderPage } from "../app.js";
import { openModal, closeModal } from "../components/modal.js";
import { Input } from "../components/input.js";

export function Categories() {

    const page = document.createElement("div");
    page.className = "page";


    const header = document.createElement("div");
    header.className = "page-header";

    const title = document.createElement("h1");
    title.textContent = "Categories";

    const add = document.createElement("button");
    add.className = "primary";
    add.textContent = "+ Add Category";

    add.onclick = showAddModal;

    header.append(title, add);

    page.append(header);


    const list = document.createElement("div");
    list.className = "category-list";

    state.menu.categories.forEach(category => {

        list.append(createRow(category));

    });

    page.append(list);

    return page;

}


function createRow(category){

    const row = document.createElement("div");

    row.className = "category-row";



    const left = document.createElement("div");

    left.className = "category-left";



    const handle = document.createElement("span");

    handle.textContent = "☰";



    const name = document.createElement("span");

    name.textContent = category.name;



    left.append(handle, name);



    const right = document.createElement("div");



    const edit = document.createElement("button");

    edit.textContent = "✏️";

    edit.onclick = ()=>showEditModal(category);



    const remove = document.createElement("button");

    remove.textContent = "🗑️";

    remove.onclick = ()=>showDeleteModal(category);



    right.append(edit, remove);



    row.append(left, right);



    return row;

}


function showAddModal(){

    const input = Input("Category name :");

    openModal({

        title:"Add Category",

        content:input.element,

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

                    if(!input.value)
                        return;

                    state.menu.categories.push({

                        id:crypto.randomUUID(),

                        name:input.value.trim()

                    });

                    markDirty();

                    closeModal();

                    renderPage();

                }

            }

        ]

    });

}


function showEditModal(category){

    const input = Input("Category Name:",category.name);




    openModal({

        title:"Edit Category",

        content:input.element,

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

                    category.name=input.value;

                    markDirty();

                    closeModal();

                    renderPage();

                }

            }

        ]

    });

}


function showDeleteModal(category){

    const used = state.menu.items.some(item=>

        item.category===category.id

    );



    const text=document.createElement("div");



    if(used){

        text.innerHTML=`

            <p>This category still contains products.</p>

            <p>Move or delete them first.</p>

        `;

    }else{

        text.innerHTML=`

            <p>Delete <b>${category.name}</b> ?</p>

        `;

    }



    openModal({

        title:"Delete Category",

        content:text,

        actions:[

            {

                label:"Cancel",
                className:"secondary",
                onClick:closeModal

            },

            ...(!used?[{

                label:"Delete",

                className:"danger",

                onClick(){

                    state.menu.categories=

                        state.menu.categories.filter(c=>c.id!==category.id);



                    markDirty();

                    closeModal();

                    renderPage();

                }

            }]:[])

        ]

    });

}*/