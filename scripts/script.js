populateContainer();

const resolutionButton = document.querySelector('.resolution-button');

resolutionButton.addEventListener('click', handleResolutionClick);

function populateContainer(size=16) {
    const container = document.querySelector('.container');
    const newRows = []

    for (let i = 0; i < size; i++) {
        const newRow = createRow(container, size);
        newRows.push(newRow);
    }
    container.replaceChildren(...newRows)
}

function createRow(container, size) {
    const newRow = document.createElement('div');
    newRow.classList.add('etch-row');
    for (let j = 0; j < size; j++) {
        
        newRow.appendChild(createCell());
    }

    return newRow
    
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

function getNewSize() {
    let newSize;
    do {
        newSize = parseInt(prompt("Please enter a size"));

    } while (newSize <= 0 || newSize > 100);
    return newSize;

}

function handleResolutionClick() {
    populateContainer(getNewSize());
}

