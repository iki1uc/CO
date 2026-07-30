import { SDSA } from "../sdsA/sdsa.js";

export const RESPO = {
    explainSDSA() {
        return {
            axes: 81,
            degrees: 360,
            source: "HDF TMP",
            purpose: "Achsenbasis für PQ und PP"
        };
    },

    loadSDSA() {
        console.log("SDSA wird geladen…");
        return SDSA.load("hdf/sdsa.tmp");
    }
};
