import { CO_RUNTIME } from "./RUN.js";

trigger("coSend", () => {
    const msg = document.getElementById("coInput").value;
    const out = CO_RUNTIME.chat(msg);
    document.getElementById("coOutput").textContent = JSON.stringify(out, null, 2);
});
