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

        // 1. SDSA laden
        SDSA_MODULE = await SDSA.loadAll();

        // 2. RESPO laden
        RESPO_MODULE = await RESPO.init();

        // 3. Pipeline laden
        PIPELINE_MODULE = PIPELINE;

        // 4. CSV laden
        const csvStatus = await loadCSV("system-status.csv");

        // 5. NC laden (RESPO + SDSA + Pipeline + CSV)
        NC_MODULE = NC.init(SDSA_MODULE, RESPO_MODULE, PIPELINE_MODULE, csvStatus);

        // 6. UI aktivieren (Buttons erst jetzt!)
        await initUI();

        console.log("CO Runtime vollständig geladen.");
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
