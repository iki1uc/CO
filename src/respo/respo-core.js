import { SDSA } from "../sdsA/sdsa.js";
import { loadCSV } from "../api/api.js";

export const RESPO = {

    async init() {
        const sdsa = await SDSA.loadAll();
        const master = await loadCSV("respo-master.csv");

        return {
            sdsa,
            master,

            getAxes() {
                return sdsa.axes;
            },

            getFlow() {
                return sdsa.flow;
            },

            getBoost() {
                return sdsa.boost;
            },

            getMasterState() {
                return master[0][1]; // z.B. "active"
            }
        };
    }
};
