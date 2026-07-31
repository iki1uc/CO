export function renderGlobalPanelInMatrix(matrix) {
    Object.entries(CO_GLOBAL_PANEL).forEach(([name, mod]) => {
        const cell = document.createElement("div");
        cell.className = "matrix-cell";
        cell.textContent = `${name} (${mod.mode})`;

        if (mod.active) cell.classList.add("nc-blue");
        else cell.classList.add("nc-red");

        matrix.appendChild(cell);
    });
}
