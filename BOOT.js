export const CO_DECIDE = {
    nextAction(systemState) {
        if (!systemState.respo.ok) return "Stabilisieren";
        if (systemState.pq.priority > 80) return "Priorität behandeln";
        if (systemState.pp.optimization < 50) return "Optimieren";
        return "System OK";
    }
};
