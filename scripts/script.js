populateContainer();

function populateContainer() {
    const container = document.querySelector('.container');
    let n = 16;

    for (let i = 0; i < n; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('etch-row');
        for (let j = 0; j < n; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('etch-cell');
            newRow.appendChild(newDiv);
        }

        container.appendChild(newRow);

    }


}