populateContainer();

const resolutionButton = document.querySelector('.resolution-button');

resolutionButton.addEventListener('click', handleResolutionClick);

const optionsButtons = [...document.querySelectorAll('.options button')];

optionsButtons.forEach(btn => {
    btn.addEventListener('click', handleOptionClick);
})

function populateContainer(size=16) {
    const container = document.querySelector('.container');
    const newRows = []

    for (let i = 0; i < size; i++) {
        const newRow = createRow(size);
        newRows.push(newRow);
    }
    container.replaceChildren(...newRows)
}

function createRow(size) {
    const newRow = document.createElement('div');
    newRow.classList.add('etch-row');
    for (let j = 0; j < size; j++) {
        
        newRow.appendChild(createCell());
    }

    return newRow
    
}

function hoverBox(e) {
    const options = [...document.querySelectorAll('.options button')];
    let newOption;
    options.forEach(option => {
        if (option.classList.contains('current-option')) {
            newOption = option.id;
        }
    })
    
    e.target.classList.add(newOption)
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

function handleOptionClick(e) {
    optionsButtons.forEach(btn => {
        if (btn.classList.contains('current-option')) {
            btn.classList.remove('current-option');
        }
        
        }
    )
    e.target.classList.add('current-option');
 


    
 
}

function updateListeners() {
    const cells = [...document.querySelectorAll('.etch-cell')];

    cells.forEach(cell => {
        cell.removeEventListener('click', hoverBox);
        cell.addEventListener('click', hoverBox);
    })
}
