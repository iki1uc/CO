import { SDSA } from "../sdsA/sdsa.js";
import { RESPO } from "../respo/respo-core.js";
import { NC } from "../nc/master.js";
import { PIPELINE } from "../station/station.js";
import { loadCSV } from "../api/api.js";
import { initUI } from "./ui.js";

export let SDSA_MODULE = null;
export let RESPO_MODULE = null;
export let PIPELINE_MODULE = null;
export let NC_MODULE = null;

export const CO_RUNTIME = {

    async init() {

        try {
            SDSA_MODULE = await SDSA.loadAll();
            RESPO_MODULE = await RESPO.init();
            PIPELINE_MODULE = PIPELINE;

            const csvStatus = await loadCSV("system-status.csv");

            NC_MODULE = NC.init(
                SDSA_MODULE,
                RESPO_MODULE,
                PIPELINE_MODULE,
                csvStatus
            );

            await initUI();

            console.log("CO Runtime vollständig geladen.");

        } catch (err) {
            console.warn("Runtime‑Meldung:", err.message);
        }
    },

    async load(path) {
        return await PIPELINE.runRetrieve(path);
    },

    search(query, dataset) {
        return PIPELINE.runSearch(query, dataset);
    },

    chat(message) {
        return PIPELINE.runChat(message);
    }
};
