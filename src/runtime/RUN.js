import { initUI } from "./ui.js";
import { initCOUI } from "./co-ui.js";
import { initNCUI } from "./nc-ui.js";
import { initOrbit } from "./orbit.js";

CO_RUNTIME.init().then(() => {

    // UI erst nach Runtime
    initUI();

    // Orbit erst nach Runtime
    initOrbit();

    // NC erst nach Runtime
    initNCUI();

    // CO erst nach Runtime
    initCOUI();

});
