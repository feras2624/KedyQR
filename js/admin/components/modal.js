let overlay = null;

export function openModal({

    title = "",

    content = null,

    render = null,

    actions = []

}) {

    closeModal();

    overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal";

    /* ---------- Header ---------- */

    const header = document.createElement("div");
    header.className = "modal-header";

    const heading = document.createElement("h2");
    heading.textContent = title;

    const close = document.createElement("button");
    close.className = "icon-btn";
    close.textContent = "✕";
    close.onclick = closeModal;

    header.append(
        heading,
        close
    );

    /* ---------- Body ---------- */

    const body = document.createElement("div");
    body.className = "modal-body";

    if (render) {

        render(body);

    } else if (content instanceof HTMLElement) {

        body.append(content);

    } else if (typeof content === "string") {

        body.innerHTML = content;

    }

    /* ---------- Footer ---------- */

    const footer = document.createElement("div");
    footer.className = "modal-footer";

    actions.forEach(action => {

        const button = document.createElement("button");

        button.textContent = action.label;

        button.className = action.className ?? "";

        button.onclick = () => {

            action.onClick?.();

        };

        footer.append(button);

    });

    modal.append(

        header,

        body,

        footer

    );

    overlay.append(modal);

    overlay.onclick = e => {

        if (e.target === overlay)

            closeModal();

    };

    document.body.append(overlay);

}

export function closeModal() {

    overlay?.remove();

    overlay = null;

}