// ===============================
// UNIVERSAL TRIGGER ENGINE
// ===============================

export function trigger(id, action) {
    const btn = document.getElementById(id);
    if (!btn) {
        console.warn(`Knopf "${id}" nicht gefunden.`);
        return;
    }
    btn.onclick = () => {
        try {
            action();
        } catch (err) {
            console.warn(`Trigger-Fehler (${id}):`, err.message);
        }
    };
}
