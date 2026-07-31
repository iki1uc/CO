// ===============================
// IMPORTS
// ===============================

import { initOrbit } from "./orbit.js";
import { initUI } from "./ui.js";

import { SDSA } from "../sdsA/sdsa.js";
import { RESPO } from "../respo/respo-core.js";
import { NC } from "../nc/master.js";
import { PIPELINE } from "../station/station.js";
import { loadCSV } from "../api/api.js";

export let SDSA_MODULE = null;
export let RESPO_MODULE = null;
export let PIPELINE_MODULE = null;
export let NC_MODULE = null;

// ===============================
// CO RUNTIME
// ===============================

export const CO_RUNTIME = {

    async init() {

        try {
            // SDSA laden
            SDSA_MODULE = await SDSA.loadAll();

            // RESPO laden
            RESPO_MODULE = await RESPO.init();

            // Pipeline laden
            PIPELINE_MODULE = PIPELINE;

            // CSV laden
            const csvStatus = await loadCSV("system-status.csv");

            // NC laden
            NC_MODULE = NC.init(
                SDSA_MODULE,
                RESPO_MODULE,
                PIPELINE_MODULE,
                csvStatus
            );

            // Orbit starten
            initOrbit();

            // UI starten
            initUI();

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

// ===============================
// START
// ===============================

CO_RUNTIME.init();
