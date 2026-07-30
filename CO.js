export const CO_ANALYZE = {
    module(name, mod) {
        return {
            name,
            type: typeof mod,
            keys: Object.keys(mod),
            functions: Object.keys(mod).filter(k => typeof mod[k] === "function")
        };
    },

    logic(name) {
        return `Logik von ${name}: ${CO_SYSTEM_MAP.logic[name]}`;
    }
};
