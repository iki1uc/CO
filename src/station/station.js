import { ORBIT_CACHE } from "./orbit.js";
import { updateOrbitUI } from "./orbit.js";

trigger("agentOn", () => {
    ORBIT_CACHE.AGENT = "XI";
    updateOrbitUI();
});

trigger("agentOff", () => {
    ORBIT_CACHE.AGENT = "IX";
    updateOrbitUI();
});
