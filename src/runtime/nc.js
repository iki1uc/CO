import { NC_HUB_ALL } from "./nc.js";

trigger("ncPredict", () => {
    show("ncOutput", NC_HUB_ALL("predict"));
});

trigger("ncAnalyse", () => {
    show("ncOutput", NC_HUB_ALL("analyse"));
});

trigger("ncFlowBoost", () => {
    show("ncOutput", NC_HUB_ALL("flow"));
});
