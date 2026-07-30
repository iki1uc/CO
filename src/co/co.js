import { PQ_COPILOT } from "../pq/pq-copilot.js";
import { PP_COPILOT } from "../pp/pp-copilot.js";

export const CO = {
    async boot(respo) {
        const sdsa = await respo.loadSDSA();

        sdsa.coDegree = 360;
        sdsa.coFulfillment = 100;

        const pqCopilot = PQ_COPILOT.init(sdsa);
        const ppCopilot = PP_COPILOT.init(sdsa);

        return {
            sdsa,
            pqCopilot,
            ppCopilot,
            respo,
            degree: 360,
            fulfillment: 100
        };
    }
};
