analyse(data) {

    const safeFlow = Number(respoFlow) || 1;
    const safeBoost = Number(respoBoost) || 1;
    const safeStab = Number(stabilisation) || 100;
    const safeAxes = Number(respoAxes) || 81;

    // Optimierte Analyse-Formel (QI/IQQ-konform)
    const score =
        (safeFlow / safeAxes) *
        (1 + safeBoost / 100) *
        (safeStab / 100);

    return {
        module: "NC_ANALYSE",
        color: "green",
        data,
        axes: safeAxes,
        stabilisation: safeStab,
        flow: safeFlow,
        boost: safeBoost,
        respoState,
        score: Number(score.toFixed(4)),
        info: "Analyse erfolgreich optimiert & stabilisiert"
    };
}
