export const ORBIT_CACHE = {
    NC: "XI",
    CO: "IX",
    AGENT: "X4",
    RESPO: "XI",
    SDSA: "IX",
    Pipeline: "XI",
    PQ: "IX",
    PP: "X4",
    Matrix: "XI"
};

function saveOrbit() {
    localStorage.setItem("ORBIT_CACHE", JSON.stringify(ORBIT_CACHE));
}

function loadOrbit() {
    const data = localStorage.getItem("ORBIT_CACHE");
    if (data) Object.assign(ORBIT_CACHE, JSON.parse(data));
}

export function updateOrbitUI() {
    Object.entries(ORBIT_CACHE).forEach(([key, mode]) => {
        const el = document.getElementById("orbit" + key);
        if (!el) return;
        el.className = "orbit-button orbit-" + mode.toLowerCase();
    });
}

export function initOrbit() {
    loadOrbit();

    Object.keys(ORBIT_CACHE).forEach(key => {
        const el = document.getElementById("orbit" + key);
        if (!el) return;

        el.onclick = () => {
            const modes = ["XI", "IX", "X4"];
            const current = ORBIT_CACHE[key];
            const next = modes[(modes.indexOf(current) + 1) % modes.length];

            ORBIT_CACHE[key] = next;
            saveOrbit();
            updateOrbitUI();
        };
    });

    updateOrbitUI();
}
import { renderOrbitInMatrix } from "./orbit-matrix.js";

trigger("matrixRefresh", () => {
    const matrix = document.getElementById("matrix");
    matrix.innerHTML = "";
    renderOrbitInMatrix(matrix);
});
function show(id, data) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = JSON.stringify(data, null, 2);
}
