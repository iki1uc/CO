export const CO_GLOBAL_PANEL = {
    NC: { active:true, mode:"XI" },
    PQ: { active:true, mode:"IX" },
    Pipeline: { active:true, mode:"X4" },
    Agent: { active:true, mode:"XI" },
    Matrix: { active:true, mode:"IX" },
    RESPO: { active:true, mode:"X4" },
    SDSA: { active:true, mode:"XI" },
    Runtime: { active:true, mode:"IX" }
};

export function updateGlobalPanelUI() {
    Object.entries(CO_GLOBAL_PANEL).forEach(([key, mod]) => {
        const el = document.getElementById("mod" + key);
        el.className = mod.active ? "mod-active" : "mod-inactive";
        el.classList.add("mod-" + mod.mode.toLowerCase());
    });
}
