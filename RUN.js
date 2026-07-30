export const CO_RUNTIME = {
    async load(path) {
        return await SRC_RetrievalAPI(path);
    },

    search(query, dataset) {
        return SRC_SearchAPI(query, dataset);
    },

    chat(message) {
        return SRC_ChatAPI(message, { station: "CO" });
    },

    analyzeModule(name, mod) {
        return CO_ANALYZE.module(name, mod);
    },

    explainLogic(name) {
        return CO_ANALYZE.logic(name);
    }
};
