import { CO_API } from "./api.js";

CO_STATION.api = CO_API;

CO_STATION.runRetrieve = async function(path) {
    return await this.api.retrieve(path);
};

CO_STATION.runSearch = function(query, dataset) {
    return this.api.search(query, dataset);
};

CO_STATION.runChat = function(message) {
    return this.api.chat(message, { station: "CO" });
};
