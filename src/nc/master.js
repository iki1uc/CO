export const NC = {

    init(sdsA, respo, pipeline, csvStatus) {

        const axes = sdsA.getAxes();
        const stabilisation = sdsA.getStabilisation();
        const flow = sdsA.getFlow();
        const boost = sdsA.getBoost();

        return {

            // -----------------------------
            // NC Predict Modul
            // -----------------------------
            predict(input) {
                return {
                    module: "NC_PREDICT",
                    color: "blue",
                    input,
                    axes,
                    flow,
                    boost,
                    prediction: `${input} → Prognose: ${flow * boost}`
                };
            },

            // -----------------------------
            // NC Analyse Modul
            // -----------------------------
            analyse(data) {
                return {
                    module: "NC_ANALYSE",
                    color: "green",
                    data,
                    axes,
                    stabilisation,
                    flow,
                    boost,
                    score: flow + boost,
                    info: "Analyse abgeschlossen"
                };
            },

            // -----------------------------
            // NC Flow Booster
            // -----------------------------
            flowBooster(level = 1) {
                const boostedFlow = flow * (boost * level);
                return {
                    module: "NC_FLOW_BOOSTER",
                    color: "orange",
                    level,
                    originalFlow: flow,
                    boostedFlow,
                    axes,
                    info: "Flow erfolgreich verstärkt"
                };
            },

            // -----------------------------
            // NC RESPO Router
            // -----------------------------
            respoRouter() {
                const state = respo.getMasterState();
                return {
                    module: "NC_RESPO_ROUTER",
                    color: "purple",
                    state,
                    axes,
                    stabilisation,
                    flow,
                    boost,
                    route: `RESPO Route aktiv: ${state}`
                };
            },

            // -----------------------------
            // NC Pipeline Auto‑Runner
            // -----------------------------
            pipelineAuto(process) {
                const result = pipeline.run(process);
                return {
                    module: "NC_PIPELINE_AUTO",
                    color: "red",
                    process,
                    result,
                    info: "Pipeline automatisch ausgeführt"
                };
            },
function highlightNC(color) {
    ncOutput.className = "nc-" + color;
}
highlightNC("blue");

            // -----------------------------
            // NC Stabilisations‑Monitor
            // -----------------------------
            stabilisationMonitor() {
                return {
                    module: "NC_STABILISATION_MONITOR",
                    color: "cyan",
                    stabilisation,
                    axes,
                    flow,
                    boost,
                    status: stabilisation > 0 ? "STABIL" : "INSTABIL"
                };
            },

            // -----------------------------
            // CSV‑Status‑Integration
            // -----------------------------
            applyStatus() {
                return {
                    module: "NC_STATUS",
                    color: "yellow",
                    csv: csvStatus,
                    applied: true
                };
            }
        };
    }
};
