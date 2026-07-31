function readMatrix9x9() {
    const out = [];
    for (let r = 1; r <= 9; r++) {
        const row = [];
        for (let c = 1; c <= 9; c++) {
            const cell = document.getElementById(`cell-${r}-${c}`);
            row.push(cell ? cell.textContent.trim() : "");
        }
        out.push(row);
    }
    return out;
}
export function initCOUI() {

    const swCOChat = document.getElementById("swCOChat");
    const swCOSearch = document.getElementById("swCOSearch");
    const swCOLoad = document.getElementById("swCOLoad");
    const runCO = document.getElementById("runCO");
    const coOutput = document.getElementById("coOutput");

    loadCO();

    swCOChat.checked = CO_CACHE.Chat;
    swCOSearch.checked = CO_CACHE.Search;
    swCOLoad.checked = CO_CACHE.Load;

    swCOChat.onchange = () => { CO_CACHE.Chat = swCOChat.checked; saveCO(); };
    swCOSearch.onchange = () => { CO_CACHE.Search = swCOSearch.checked; saveCO(); };
    swCOLoad.onchange = () => { CO_CACHE.Load = swCOLoad.checked; saveCO(); };

    runCO.onclick = async () => {

        coOutput.textContent = "CO wird ausgeführt…";

        await new Promise(r => setTimeout(r, 50)); // stabilisiert Runtime

        // 1) Matrix lesen
        const matrix = readMatrix9x9();

        // 2) Systemachsen lesen
        const systemState = {
            respo: RESPO_MODULE.state(),
            pq: PQ_MODULE.state(),
            pp: PP_MODULE.state()
        };

        // 3) Matrix-Entscheidung
        const tri = COtriCOme9x9(matrix);

        // 4) Team-Join
        COjoinTeam9x9(matrix);

        // 5) System-Entscheidung
        const action = CO_DECIDE.nextAction(systemState);

        // 6) Runtime-Aktionen
        const runtime = {
            chat: CO_CACHE.Chat ? CO_RUNTIME.chat("CO MASTER RUN") : "Chat deaktiviert",
            search: CO_CACHE.Search ? CO_RUNTIME.search("CO MASTER", []) : "Search deaktiviert",
            load: CO_CACHE.Load ? await CO_RUNTIME.load("system-status.csv") : "Load deaktiviert"
        };

        // 7) Pipeline-Sprung
        if (tri === 1) {
            window.location.href = "co-run.html";
        }

        // 8) Ausgabe
        coOutput.textContent = JSON.stringify({
            tri,
            action,
            runtime,
            systemState
        }, null, 2);
    };
}
