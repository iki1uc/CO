export const SDSA = {

    async loadCSV(path) {
        const response = await fetch(path);
        if (!response.ok) return [];

        const text = await response.text();
        const lines = text.trim().split("\n");

        return lines.slice(1).map(line => {
            const values = line.split(",");
            return {
                axis: values[0],
                value: values[1],
                degree: 360,
                fulfillment: 100
            };
        });
    },

    async loadAll() {

        const AXIOM = await this.loadCSV("axiom-hardware-6.csv");
        const FEHLER = await this.loadCSV("fehler-ursache-5.csv");
        const PIPE = await this.loadCSV("pipeline-station-11.csv");
        const RESPO = await this.loadCSV("respo-master.csv");
        const STATUS = await this.loadCSV("system-status.csv");

        return {
            axes: 81,
            vector: "360°",
            fulfillment: "100%",
            AXIOM,
            FEHLER,
            PIPE,
            RESPO,
            STATUS
        };
    }
};
