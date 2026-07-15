import { QRCodePreview } from "../components/qr.js";


export function Dashboard(){

    const page = document.createElement("div");
    const project = localStorage.getItem("project");
    page.className = "page";
    const qr = QRCodePreview(`https://${project}.kedyqr.com`);
    page.append(qr.element);

    return page;

}

