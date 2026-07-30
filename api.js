import { SRC_RetrievalAPI } from "../api/retrieval.js";
import { SRC_SearchAPI } from "../api/search.js";
import { SRC_ChatAPI } from "../api/chat.js";

export const CO_API = {
    retrieve: SRC_RetrievalAPI,
    search: SRC_SearchAPI,
    chat: SRC_ChatAPI
};
