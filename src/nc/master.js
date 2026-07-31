export const NC = {

    init(sdsA, respo, pipeline) {

        const axes = sdsA.getAxes();
        const stabilisation = sdsA.getStabilisation();
        const flow = sdsA.getFlow();
        const boost = sdsA.getBoost();

        return {

            // --- CORE ---
            core(process) {
                return {
                    process,
                    axes,
                    stabilisation,
                    flow,
                    boost,
                    status: "NC_CORE_OK"
                };
            },

            // --- KI ---
            ki(input) {
                return {
                    module: "KI",
                    input,
                    axes,
                    flow,
                    result: `KI verarbeitet: ${input}`
                };
            },

            // --- AI ---
            ai(input) {
                return {
                    module: "AI",
                    input,
                    stabilisation,
                    boost,
                    result: `AI verarbeitet: ${input}`
                };
            },

            // --- SCALE ---
            scale(value) {
                return {
                    module: "SCALE",
                    value,
                    scaled: value * boost,
                    info: "SCALE erfolgreich"
                };
            },

            // --- HUB_6D ---
            hub6d(data) {
                return {
                    module: "HUB_6D",
                    data,
                    axes,
                    stabilisation,
                    flow,
                    boost,
                    info: "6D-Hub aktiv"
                };
            },

            // --- PIPELINE ---
            pipeline(process) {
                return pipeline.run(process);
            },

            // --- RESPO ---
            respoState() {
                return respo.getMasterState();
            },

            // --- STATUS CSV ---
            applyStatus(csv) {
                return {
                    module: "NC_STATUS",
                    csv,
                    applied: true
                };
            },

            // --- EXTENSION SLOT ---
            extend(name, fn) {
                this[name] = fn;
                return `NC Modul erweitert: ${name}`;
            }
        };
    }
};
