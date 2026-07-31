import { SDSA } from "../sdsA/sdsa.js";
import { loadCSV } from "../api/api.js";

export const RESPO = {

    async init() {
        try {
            const sdsa = await SDSA.loadAll();
            const master = await loadCSV("respo-master.csv");

            return {
                sdsa,
                master,

                getAxes() {
                    return sdsa.axes || 81; 
                },

                getFlow() {
                    return sdsa.flow || 1;
                },

                getBoost() {
                    return sdsa.boost || 1;
                },

                getMasterState() {
                    return master?.[0]?.[1] || "unknown";
                }
            };

        } catch (err) {
            console.warn("RESPO‑Meldung:", err.message);

            return {
                sdsa: {},
                master: [],
                getAxes: () => 81,
                getFlow: () => 1,
                getBoost: () => 1,
                getMasterState: () => "error"
            };
        }
    }
};
getFlow() { return this.sdsa.flow; }
getBoost() { return this.sdsa.boost; }
getStabilisation() { return this.sdsa.STATUS?.length || 1; }
