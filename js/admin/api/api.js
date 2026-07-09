const API = "https://kedyqr-wr.p0038300.workers.dev";

export async function api(path, options = {}) {

    const token = localStorage.getItem("token");

    options.headers = {

        ...(options.headers || {}),

        ...(token
            ? { Authorization: `Bearer ${token}` }
            : {})
    };

    const response = await fetch(`${API}${path}`, options);

    if (response.status === 401) {

        localStorage.removeItem("token");
        localStorage.removeItem("project");

        location.href = "login.html";

        throw new Error("Unauthorized");
    }

    if (!response.ok) {

        throw new Error(await response.text());

    }

    return response.json();
}