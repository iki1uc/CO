import { COtriCOme9x9 } from "./COtri.js";
import { COjoinTeam9x9 } from "./signal.js";
import { CO_DECIDE } from "./BOOT.js";
import { CO_RUNTIME } from "./runtime.js";

export const CO_MASTER = {

    run(systemState, matrix) {

        // 1) Matrix-Entscheidung
        const tri = COtriCOme9x9(matrix);

        // 2) Team-Join
        COjoinTeam9x9(matrix);

        // 3) RESPO/PQ/PP Entscheidung
        const action = CO_DECIDE.nextAction(systemState);

        // 4) Runtime-Aktionen
        const runtime = {
            chat: CO_RUNTIME.chat("CO MASTER RUN"),
            search: CO_RUNTIME.search("CO MASTER", []),
            load: CO_RUNTIME.load("system-status.csv")
        };

        // 5) Pipeline-Sprung
        if (tri === 1) {
            window.location.href = "co-run.html";
        }

        return {
            tri,
            action,
            runtime
        };
    }
};
