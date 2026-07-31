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
