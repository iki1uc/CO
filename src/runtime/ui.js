import { NC_MODULE, RESPO_MODULE, SDSA_MODULE, PIPELINE_MODULE } from "./runtime.js";

export async function initUI() {

    const ncOutput = document.getElementById("ncOutput");
    const matrix = document.getElementById("matrix");

    // -----------------------------
    // Fehler sollen NICHT stören
    // -----------------------------
    function safeRun(fn, label) {
        try {
            fn();
        } catch (err) {
            console.warn("UI‑Meldung:", label, err.message);
            ncOutput.textContent = `⚠ ${label}: ${err.message}`;
        }
    }

    // -----------------------------
    // NC Farben
    // -----------------------------
    function highlightNC(color) {
        ncOutput.className = "nc-" + color;
    }

    // -----------------------------
    // NC Buttons
    // -----------------------------
    document.getElementById("ncPredict").onclick = () =>
        safeRun(() => {
            const out = NC_MODULE.predict("input");
            highlightNC(out.color);
            ncOutput.textContent = JSON.stringify(out, null, 2);
        }, "NC Predict");

    document.getElementById("ncAnalyse").onclick = () =>
        safeRun(() => {
            const out = NC_MODULE.analyse("data");
            highlightNC(out.color);
            ncOutput.textContent = JSON.stringify(out, null, 2);
        }, "NC Analyse");

    document.getElementById("ncFlowBoost").onclick = () =>
        safeRun(() => {
            const out = NC_MODULE.flowBooster(2);
            highlightNC(out.color);
            ncOutput.textContent = JSON.stringify(out, null, 2);
        }, "NC Flow Booster");

    document.getElementById("ncRespoRouter").onclick = () =>
        safeRun(() => {
            const out = NC_MODULE.respoRouter();
            highlightNC(out.color);
            ncOutput.textContent = JSON.stringify(out, null, 2);
        }, "NC RESPO Router");

    document.getElementById("ncPipelineAuto").onclick = () =>
        safeRun(() => {
            const out = NC_MODULE.pipelineAuto("v1024");
            highlightNC(out.color);
            ncOutput.textContent = JSON.stringify(out, null, 2);
        }, "NC Pipeline Auto");

    document.getElementById("ncStabilisationMonitor").onclick = () =>
        safeRun(() => {
            const out = NC_MODULE.stabilisationMonitor();
            highlightNC(out.color);
            ncOutput.textContent = JSON.stringify(out, null, 2);
        }, "NC Stabilisations‑Monitor");

    // -----------------------------
    // NC_HUB_ALL in Matrix integrieren
    // -----------------------------
    document.getElementById("matrixRefresh").onclick = () =>
        safeRun(() => {
            renderMatrix();
        }, "Matrix Refresh");

    function renderMatrix() {
        matrix.innerHTML = "";

        const hub = NC_HUB_ALL("x");

        const modules = [
            hub.predict,
            hub.analyse,
            hub.flowBoost,
            hub.respoRouter,
            hub.pipelineAuto,
            hub.stabilisationMonitor
        ];

        modules.forEach(m => {
            const cell = document.createElement("div");
            cell.className = "matrix-cell nc-" + m.color;
            cell.textContent = `${m.module} (${m.respoState})`;
            matrix.appendChild(cell);
        });
    }

    console.log("UI vollständig geladen.");
}
