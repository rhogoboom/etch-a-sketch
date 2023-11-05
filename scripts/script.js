populateContainer();

function populateContainer() {
    const container = document.querySelector('.container');
    let n = 50;

    for (let i = 0; i < n; i++) {
        createRow(container, n);
    }
}

function createRow(container, size) {
    const newRow = document.createElement('div');
    newRow.classList.add('etch-row');
    for (let j = 0; j < size; j++) {
        
        newRow.appendChild(createCell());
    }
    container.appendChild(newRow);
}

function hoverBox(e) {
    e.target.classList.add('hovered')
}

function createCell() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('etch-cell');
    newDiv.addEventListener('mouseenter', hoverBox);
    return newDiv
}
