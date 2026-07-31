import { CO_RUNTIME } from "./RUN.js";

trigger("coSend", () => {
    const msg = document.getElementById("coInput").value;
    const out = CO_RUNTIME.chat(msg);
    document.getElementById("coOutput").textContent = JSON.stringify(out, null, 2);
});
import { RESPO_MODULE } from "./RUN.js";

trigger("respoFlow", () => {
    const out = RESPO_MODULE.flow();
    document.getElementById("respoOutput").textContent = JSON.stringify(out, null, 2);
});
import { PIPELINE_MODULE } from "./RUN.js";

trigger("pipelineStart", () => {
    const out = PIPELINE_MODULE.runSearch("start", { pipeline: "active" });
    show("pipelineOutput", out);
});
