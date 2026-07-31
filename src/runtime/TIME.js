import { RESPO_MODULE, SDSA_MODULE, NC_MODULE } from "./RUN.js";

export const CO_MAP = {

    mapSystem() {
        try {
            return {
                RESPO: RESPO_MODULE?.getMasterState() || "unknown",
                SDSA: SDSA_MODULE?.axes || 81,
                NC: Object.keys(NC_MODULE || {}),
                TIME: Date.now()
            };
        } catch (err) {
            console.warn("TIME‑Meldung:", err.message);
            return {
                RESPO: "error",
                SDSA: "error",
                NC: [],
                TIME: Date.now()
            };
        }
    }
};
