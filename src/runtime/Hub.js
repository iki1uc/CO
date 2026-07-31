export const CO_BUTTONS = {
    run(module, fn, output) {
        const mod = CO_GLOBAL_PANEL[module];

        if (!mod.active) {
            output.textContent = `⚠ ${module} deaktiviert (${mod.mode})`;
            return;
        }

        try {
            fn();
        } catch (err) {
            output.textContent = `⚠ Fehler in ${module}: ${err.message}`;
        }
    }
};
