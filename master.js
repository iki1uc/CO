import { CO_API } from "./api.js";
import { CO_STATION } from "./station.js";
import { CO_RUNTIME } from "./runtime.js";
import { CO_SYSTEM_MAP } from "./KG.js";
import { CO_ANALYZE } from "./CO.js";
import { CO_DECIDE } from "./BOOT.js";

export const CO = {
    api: CO_API,
    station: CO_STATION,
    runtime: CO_RUNTIME,
    map: CO_SYSTEM_MAP,
    analyze: CO_ANALYZE,
    decide: CO_DECIDE,

    boot(system) {
        return {
            system,
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
