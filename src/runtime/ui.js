runCO.onclick = async () => {

    coOutput.textContent = "CO MASTER wird ausgeführt…";

    await new Promise(r => setTimeout(r, 50));

    // 1) Matrix lesen
    const matrix = readMatrix9x9();

    // 2) Systemstate bauen
    const systemState = {
        respo: RESPO_MODULE.state(),
        pq: PQ_MODULE.state(),
        pp: PP_MODULE.state()
    };

    // 3) CO MASTER ausführen
    const out = CO_MASTER.run(systemState, matrix);

    // 4) Ausgabe
    coOutput.textContent = JSON.stringify(out, null, 2);
};
