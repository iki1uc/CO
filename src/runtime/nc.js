import { ORBIT_CACHE } from "./orbit.js";

export function NC_HUB_ALL(input) {
    return {
        ki: ORBIT_CACHE.NC === "XI" ? NC_MODULE.ki(input) : "KI Orbit deaktiviert",
        ai: ORBIT_CACHE.NC === "IX" ? NC_MODULE.ai(input) : "AI Orbit deaktiviert",
        scale: ORBIT_CACHE.NC === "X4" ? NC_MODULE.scale(42) : "SCALE Orbit deaktiviert",
        hub6d: NC_MODULE.hub6d(input),
        respo: NC_MODULE.respoState()
    };
}
