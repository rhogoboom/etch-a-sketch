function createGrid(gridDim = 16) {
    const container = document.querySelector('.painting-area')
    removeAllChildren(container);
    for (let i = 0; i < gridDim; i++) {
        const row = document.createElement('div');
        row.className = 'painting-row';
        row.style.width = container.scrollWidth;
        row.style.height = container.scrollHeight;

        for (j = 0; j < gridDim; j++) {
            const cell = document.createElement('div');
            cell.classList.add('painting-cell')
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    addListeners();

}

function blackHover(e) {
    e.target.style.backgroundColor ='black';
}

function addListeners() {
    const cells = document.querySelectorAll('.painting-cell');
    cells.forEach(cell => cell.addEventListener('mouseenter', blackHover));
}



const resetButton = document.querySelector('.reset');

function getNewDimension() {
    let newDim;
    while (isNaN(newDim) || newDim <= 0 || newDim > 100) {
        newDim = parseInt(prompt('How many cells per side?'));
        console.log(newDim);
        console.log(typeof newDim);
    }
    return newDim;
}

function clearColors(elem) {
    elem.style.backgroundColor = 'white';
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetGrid() {
    // use below later
    // cells.forEach(cell => clearColors(cell));

    let gridDim = getNewDimension();
    createGrid(gridDim);

}

resetButton.addEventListener('click', resetGrid);


createGrid();