export const SDSA = {
    load(path) {
        console.log("SDSA TMP geladen:", path);

        return {
            axes: 81,
            vector: "360°",
            tmp: path
        };
    }
};
