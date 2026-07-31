async loadAll() {

    const AXIOM = await this.loadCSV("axiom-hardware-6.csv");
    const FEHLER = await this.loadCSV("fehler-ursache-5.csv");
    const PIPE = await this.loadCSV("pipeline-station-11.csv");
    const RESPO = await this.loadCSV("respo-master.csv");
    const STATUS = await this.loadCSV("system-status.csv");

    return {
        axes: AXIOM.length || 81,
        flow: PIPE.length || 1,
        boost: STATUS.length || 1,
        fulfillment: "100%",
        AXIOM,
        FEHLER,
        PIPE,
        RESPO,
        STATUS
    };
}
1
getAxes() { return this.axes; }
getFlow() { return this.flow; }
getBoost() { return this.boost; }
getStabilisation() { return this.STATUS?.length || 1; }
export const SDSA = {

    // ... dein loadCSV + loadAll bleibt unverändert

    getAxes() {
        return this.AXIOM?.length || 81;
    },

    getFlow() {
        return this.PIPE?.length || 1;
    },

    getBoost() {
        return this.STATUS?.length || 1;
    },

    getStabilisation() {
        return this.FEHLER?.length || 1;
    }
};
