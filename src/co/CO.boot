import { SDSA } from "../SDSA/station.js";
import { PQ } from "../PQ/station.js";
import { PP } from "../PP/station.js";
import { CO_RUNTIME } from "./runtime.js";

export const CO = {
    boot(respo) {
        return {
            sdsa: SDSA.boot(respo),
            pqCopilot: PQ.boot(respo),
            ppCopilot: PP.boot(respo),

            runtime: CO_RUNTIME,

            degree: 360,
            fulfillment: 100
        };
    }
};
