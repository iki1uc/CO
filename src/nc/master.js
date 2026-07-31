import { CO_API } from "./api.js";
import { CO_STATION } from "./station.js";
import { CO_RUNTIME } from "./runtime.js";

import { CO_SYSTEM_MAP } from "./KG.js";
import { CO_ANALYZE } from "./CO.js";
import { CO_DECIDE } from "./BOOT.js";

import { SDSA } from "../SDSA/station.js";
import { PQ } from "../PQ/station.js";
import { PP } from "../PP/station.js";

export const CO = {
    api: CO_API,
    station: CO_STATION,
    runtime: CO_RUNTIME,
    map: CO_SYSTEM_MAP,
    analyze: CO_ANALYZE,
    decide: CO_DECIDE,

    boot(respo) {
        return {
            respo,
            sdsa: SDSA.boot(respo),
            pqCopilot: PQ.boot(respo),
            ppCopilot: PP.boot(respo),

            runtime: CO_RUNTIME,

            degree: 360,
            fulfillment: 100
        };
    }
};
