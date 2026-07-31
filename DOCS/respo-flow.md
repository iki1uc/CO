flowBooster(level = 1) {

    const safeFlow = Number(respoFlow) || 1;
    const safeBoost = Number(respoBoost) || 1;
    const safeStab = Number(stabilisation) || 100;

    // Optimierte Booster-Formel (QI/IQQ-konform)
    const boostedFlow =
        (safeFlow * level) *
        (1 + safeBoost / 100) *
        (safeStab / 100);

    return {
        module: "NC_FLOW_BOOSTER",
        color: "orange",
        level,
        originalFlow: safeFlow,
        boostedFlow: Math.round(boostedFlow),
        axes: respoAxes,
        stabilisation: safeStab,
        respoState,
        info: "Flow erfolgreich optimiert & stabilisiert"
    };
}
