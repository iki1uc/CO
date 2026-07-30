import { CO_STATION } from "./station.js";

export const CO_RUNTIME = {
    async load(path) {
        return await CO_STATION.runRetrieve(path);
    },

    search(query, dataset) {
        return CO_STATION.runSearch(query, dataset);
    },

    chat(message) {
        return CO_STATION.runChat(message);
    }
};
