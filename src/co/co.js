import { PQ_COPILOT } from "../pq/pq-copilot.js";
import { PP_COPILOT } from "../pp/pp-copilot.js";

export const CO = {
    boot(respo) {
        console.log("CO Copilot gestartet…");

        const sdsa = respo.loadSDSA();

        const pqCopilot = PQ_COPILOT.init(sdsa);
        const ppCopilot = PP_COPILOT.init(sdsa);

        return {
            sdsa,
            pqCopilot,
            ppCopilot,
            respo
        };
    }
};
