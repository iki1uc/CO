import { SDSA } from "../sdsA/sdsa.js";

export const RESPO = {
    async loadSDSA() {
        const sdsa = await SDSA.loadAll();
        sdsa.respoDegree = 360;
        sdsa.respoFulfillment = 100;
        return sdsa;
    },

    explainSDSA() {
        return {
            axes: 81,
            degrees: 360,
            fulfillment: "100%",
            files: ["B.csv", "H.csv", "T.csv"],
            purpose: "Achsenbasis für PQ und PP"
        };
    }
};
