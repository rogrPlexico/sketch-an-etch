
// gives user option to change grid zize when button is clicked
function buttonClick() {
    do {
        var numberOfSquares = prompt('Enter Number of Squares Per Side', 'enter a number 2 - 100');
        console.log(numberOfSquares);
    } while (!(numberOfSquares > 0 && numberOfSquares < 151)
        && numberOfSquares !== null);
    
    // remove existing grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }

    // insert new grid
    for (i = 1; i <= numberOfSquares; i++) {
        const row = document.createElement('div');
        row.classList.add(`row${i}`, 'row');
        gridContainer.appendChild(row);
    
        for (j =1; j <= numberOfSquares; j++) {
            const column = document.createElement('div');
            column.classList.add(`column${j}`, 'column');
            column.addEventListener('mouseenter', active)
            row.appendChild(column);        
        }
    }
}


function active(e) {
    const cell = e.target;
    cell.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;


}

const gridContainer = document.querySelector('.grid-container') 

for (i = 1; i <= 3; i++) {
    const row = document.createElement('div');
    row.classList.add(`row${i}`, 'row');
    gridContainer.appendChild(row);

    for (j =1; j <= 3; j++) {
        const column = document.createElement('div');
        column.classList.add(`column${j}`, 'column');
        column.addEventListener('mouseenter', active)
        row.appendChild(column);        
    }
}



const button = document.querySelector('button');
button.addEventListener('click', buttonClick);







