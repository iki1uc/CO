// ===============================
// IMPORTS
// ===============================

import { NC_HUB_ALL } from "./nc.js";
import { updateOrbitUI } from "./orbit.js";
import { ORBIT_CACHE } from "./orbit.js";
import { CO_RUNTIME } from "./RUN.js";
import { renderOrbitInMatrix } from "./orbit-matrix.js";

// ===============================
// UI INITIALISIERUNG
// ===============================

export function initUI() {

    console.log("UI wird initialisiert…");

    // -------------------------------
    // ORBIT UI
    // -------------------------------
    updateOrbitUI();

    // -------------------------------
    // NC BUTTONS
    // -------------------------------

    bind("ncPredict", () => runNC("predict"));
    bind("ncAnalyse", () => runNC("analyse"));
    bind("ncFlowBoost", () => runNC("flow"));
    bind("ncRespoRouter", () => runNC("router"));
    bind("ncPipelineAuto", () => runNC("pipeline"));
    bind("ncStabilisationMonitor", () => runNC("monitor"));

    // -------------------------------
    // MATRIX BUTTON
    // -------------------------------

    bind("matrixRefresh", () => {
        const matrix = document.getElementById("matrix");
        matrix.innerHTML = "";
        renderOrbitInMatrix(matrix);
    });

    console.log("UI vollständig geladen.");
}

// ===============================
// HILFSFUNKTIONEN
// ===============================

function bind(id, fn) {
    const el = document.getElementById(id);
    if (!el) {
        console.warn(`UI Warnung: Button "${id}" nicht gefunden.`);
        return;
    }
    el.onclick = () => {
        try {
            fn();
        } catch (err) {
            console.warn(`UI Fehler (${id}):`, err.message);
        }
    };
}

function runNC(mode) {
    const out = NC_HUB_ALL(mode);
    const target = document.getElementById("ncOutput");
    if (target) target.textContent = JSON.stringify(out, null, 2);
}
