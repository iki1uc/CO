export const PQ_COPILOT = {
    init(sdsa) {
        console.log("PQ Copilot gestartet…");

        return {
            advise(task) {
                return `PQ Copilot empfiehlt: ${task} zuerst ausführen.`;
            },

            axes: sdsa.axes,
            degrees: sdsa.vector
        };
    }
};
