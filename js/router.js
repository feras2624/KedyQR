export function getCafeName() {

    const params = new URLSearchParams(location.search);

    if (params.has("cafe"))
        return params.get("cafe");

    const host = location.hostname;

    if (
        host === "localhost" ||
        host === "127.0.0.1"
    )
        return "demotastfas";

    return host.split(".")[0];

}