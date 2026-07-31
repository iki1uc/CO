export const SDSA = {

    async loadCSV(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) return [];

            const text = await response.text();
            const lines = text.trim().split("\n");

            return lines.slice(1).map(line => {
                const values = line.split(",");
                return {
                    axis: values[0],
                    value: values[1]
                };
            });

        } catch (err) {
            console.warn("SDSA CSV‑Fehler:", err.message);
            return [];
        }
    },

    async loadAll() {

        // ECHTE Dateien aus deinem Repo
        this.AXIOM  = await this.loadCSV("axiom-hardware-6.csv");
        this.FEHLER = await this.loadCSV("fehler-ursache-5.csv");
        this.PIPE   = await this.loadCSV("pipeline-station-11.csv");
        this.RESPO  = await this.loadCSV("respo-master.csv");
        this.STATUS = await this.loadCSV("system-status.csv");

        // QI/IQQ‑Maßnahmen
        this.axes  = this.AXIOM.length  || 81;
        this.flow  = this.PIPE.length   || 1;
        this.boost = this.STATUS.length || 1;

        return {
            axes: this.axes,
            flow: this.flow,
            boost: this.boost,
            AXIOM: this.AXIOM,
            FEHLER: this.FEHLER,
            PIPE: this.PIPE,
            RESPO: this.RESPO,
            STATUS: this.STATUS
        };
    },

    // Achsen
    getAxes() {
        return this.axes ?? this.AXIOM?.length ?? 81;
    },

    // Flow aus Pipeline
    getFlow() {
        return this.flow ?? this.PIPE?.length ?? 1;
    },

    // Boost aus Systemstatus
    getBoost() {
        return this.boost ?? this.STATUS?.length ?? 1;
    },

    // Stabilisation aus Fehlerachsen
    getStabilisation() {
        if (!this.FEHLER) return 100;
        const count = this.FEHLER.length;
        return 100 - count;   // QI/IQQ‑konform
    }
};
