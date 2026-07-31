export function COtriCOme9x9(matrix) {

    // Beispiel: Matrix liefert Werte
    const chatReady   = matrix[0][0] === "CHAT";
    const searchReady = matrix[0][1] === "SEARCH";
    const loadReady   = matrix[0][2] === "LOAD";

    const stateReady  = matrix[8][8] === "ACTIVE";

    const ready =
        chatReady &&
        searchReady &&
        loadReady &&
        stateReady;

    return ready ? 1 : 0;
}
