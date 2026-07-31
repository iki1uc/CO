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
