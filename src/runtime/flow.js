export function applyRespoFlowToPanel(respo) {
    const flow = respo.getFlow();
    const boost = respo.getBoost();

    Object.values(CO_GLOBAL_PANEL).forEach(mod => {
        if (flow > 2) mod.mode = "XI";
        if (boost > 3) mod.mode = "X4";
        if (flow < 1) mod.mode = "IX";
    });

    updateGlobalPanelUI();
}
