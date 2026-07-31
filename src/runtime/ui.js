export async function initUI() {

    // Warten bis SDSA, RESPO, Pipeline und CSV geladen sind
    const csvStatus = await loadCSV("system-status.csv");
    NC_MODULE = NC.init(SDSA_MODULE, RESPO_MODULE, PIPELINE_MODULE, csvStatus);

    // Jetzt sind NC_MODULE und RESPO vollständig geladen
    // Jetzt erst Buttons aktivieren

    document.getElementById("ncPredict").onclick = () => {
        const out = NC_MODULE.predict("input");
        highlightNC(out.color);
        ncOutput.textContent = JSON.stringify(out, null, 2);
    };

    document.getElementById("ncAnalyse").onclick = () => {
        const out = NC_MODULE.analyse("data");
        highlightNC(out.color);
        ncOutput.textContent = JSON.stringify(out, null, 2);
    };

    document.getElementById("ncFlowBoost").onclick = () => {
        const out = NC_MODULE.flowBooster(2);
        highlightNC(out.color);
        ncOutput.textContent = JSON.stringify(out, null, 2);
    };

    document.getElementById("ncRespoRouter").onclick = () => {
        const out = NC_MODULE.respoRouter();
        highlightNC(out.color);
        ncOutput.textContent = JSON.stringify(out, null, 2);
    };

    document.getElementById("ncPipelineAuto").onclick = () => {
        const out = NC_MODULE.pipelineAuto("v1024");
        highlightNC(out.color);
        ncOutput.textContent = JSON.stringify(out, null, 2);
    };

    document.getElementById("ncStabilisationMonitor").onclick = () => {
        const out = NC_MODULE.stabilisationMonitor();
        highlightNC(out.color);
        ncOutput.textContent = JSON.stringify(out, null, 2);
    };
}
