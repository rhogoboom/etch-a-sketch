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
    if (e.ctrlKey) {
        e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    } else {
        const options = [...document.querySelectorAll('.options button')];
        let currentOption;
        options.forEach(option => {
            if (option.classList.contains('current-option')) {
                currentOption = option.id;
            }
        })

        if (currentOption === 'option-normal') {
            e.target.style.backgroundColor = 'rgba(0,0,0,1)';
        } else if (currentOption === 'option-random-rgb') {
            e.target.style.backgroundColor = randomRGBA();
        } else if (currentOption === 'option-fade') {
            if (e.target.style.backgroundColor === '') {
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
            }
            else {
                let bgArray = e.target.style.backgroundColor.split(',');
                let alpha = parseFloat(bgArray[3]);
                alpha = Math.min(1, alpha + 0.1);
                bgArray[3] = " " + alpha + ")";
                const bgString = bgArray.join();
                e.target.style.backgroundColor = bgString;
            }
            
        }
        
    }

    


}


function randomRGBInput() {
    return Math.floor(Math.random() * 256);
}

function randomRGBA() {
    const r = randomRGBInput();
    const g = randomRGBInput();
    const b = randomRGBInput();
    const alpha = 1
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
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
