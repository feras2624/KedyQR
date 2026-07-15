import QRCode from "https://esm.sh/qrcode@1.5.4";

export function QRCodePreview(url) {

    const wrapper = document.createElement("div");

    wrapper.className = "qr-preview";

    const canvas = document.createElement("canvas");

    const download = document.createElement("button");

    download.className = "primary";

    download.textContent = "Download QR";

    async function render() {

        await QRCode.toCanvas(

            canvas,

            url,

            {

                width: 280,

                margin: 2,

                errorCorrectionLevel: "H"

            }

        );

    }

    render();

    download.onclick = () => {

        const a = document.createElement("a");

        a.download = "qrcode.png";

        a.href = canvas.toDataURL("image/png");

        a.click();

    };

    wrapper.append(

        canvas,

        download

    );

    return {

        element: wrapper,

        update(newUrl) {

            url = newUrl;

            render();

        }

    };

}