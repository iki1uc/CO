export const SDSA = {
    async loadCSV(path) {
        const response = await fetch(path);
        const text = await response.text();

        const lines = text.trim().split("\n");
        const headers = lines[0].split(",");

        const data = lines.slice(1).map(line => {
            const values = line.split(",");
            return {
                axis: values[0],
                value: Number(values[1]),
                degree: 360,
                fulfillment: 100
            };
        });

        return data;
    },

    async loadAll() {
        const B = await this.loadCSV("B.csv");
        const H = await this.loadCSV("H.csv");
        const T = await this.loadCSV("T.csv");

        return {
            axes: 81,
            vector: "360°",
            fulfillment: "100%",
            B,
            H,
            T
        };
    }
};
