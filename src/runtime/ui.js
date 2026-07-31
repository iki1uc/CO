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
    // NC BUTTONS
    // -------------------------------

    bindButton("ncPredict", () => {
        const out = NC_HUB_ALL("predict");
        show("ncOutput", out);
    });

    bindButton("ncAnalyse", () => {
        const out = NC_HUB_ALL("analyse");
        show("ncOutput", out);
    });

    bindButton("ncFlowBoost", () => {
        const out = NC_HUB_ALL("flow");
        show("ncOutput", out);
    });

    bindButton("ncRespoRouter", () => {
        const out = NC_HUB_ALL("router");
        show("ncOutput", out);
    });

    bindButton("ncPipelineAuto", () => {
        const out = NC_HUB_ALL("pipeline");
        show("ncOutput", out);
    });

    bindButton("ncStabilisationMonitor", () => {
        const out = NC_HUB_ALL("monitor");
        show("ncOutput", out);
    });

    // -------------------------------
    // MATRIX BUTTON
    // -------------------------------

    bindButton("matrixRefresh", () => {
        const matrix = document.getElementById("matrix");
        matrix.innerHTML = "";
        renderOrbitInMatrix(matrix);
    });

    // -------------------------------
    // CO CHAT
    // -------------------------------

    const chatSend = document.getElementById("chatSend");
    const chatInput = document.getElementById("chatInput");
    const chatOut = document.getElementById("chatOutput");

    if (chatSend && chatInput && chatOut) {
        chatSend.onclick = () => {
            const msg = chatInput.value.trim();
            if (!msg) return;
            const res = CO_RUNTIME.chat(msg);
            chatOut.textContent = JSON.stringify(res, null, 2);
        };
    }

    // -------------------------------
    // PQ MODUS
    // -------------------------------

    const pqNormal = document.getElementById("pqNormal");
    const pqEdit = document.getElementById("pqEdit");

    if (pqNormal) pqNormal.onclick = () => setPQ("normal");
    if (pqEdit) pqEdit.onclick = () => setPQ("edit");

    // -------------------------------
    // PIPELINE START
    // -------------------------------

    bindButton("pipelineStart", () => {
        const res = CO_RUNTIME.search("start", { pipeline: "active" });
        show("pipelineOutput", res);
    });

    // -------------------------------
    // AGENT MODUS
    // -------------------------------

    bindButton("agentOn", () => {
        ORBIT_CACHE.AGENT = "XI";
        updateOrbitUI();
    });

    bindButton("agentOff", () => {
        ORBIT_CACHE.AGENT = "IX";
        updateOrbitUI();
    });

    // -------------------------------
    // ORBIT UI UPDATE
    // -------------------------------

    updateOrbitUI();

    console.log("UI vollständig geladen.");
}

// ===============================
// HILFSFUNKTIONEN
// ===============================

function bindButton(id, fn) {
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

function show(id, data) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = JSON.stringify(data, null, 2);
}

function setPQ(mode) {
    const out = document.getElementById("pqOutput");
    if (!out) return;
    out.textContent = `PQ Modus: ${mode}`;
}
