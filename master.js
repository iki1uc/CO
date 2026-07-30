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
            api: this.api,
            station: this.station,
            runtime: this.runtime,
            map: this.map,
            analyze: this.analyze,
            decide: this.decide,
            degree: 360,
            fulfillment: 100
        };
    }
};
