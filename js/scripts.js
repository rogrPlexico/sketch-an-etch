
// gives user option to change grid zize when button is clicked
function buttonClick() {
    do {
        var numberOfSquares = prompt('Enter Number of Squares Per Side', 'enter a number 2 - 100');
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

/* activate ONE of the two functions named 'active'. The first will enable single color draw (corresponding to the .active css style). The second fucntion will enable colorful draw. */

// function active(e) {
//     const element = e.target;
//     element.classList.add('active');
// }

function active(e) {
    const cell = e.target;
    cell.style.backgroundColor = getRandomColor();
}

function changeBackground(e) {
    let randomColor = getRandomColor();
    gridContainer.style.backgroundColor = randomColor + '!important'; 
    columns.forEach(item => item.style.backgroundColor = randomColor);
    console.log("change background color button clicked");
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

const columns = document.querySelectorAll('.column');

const gridButton = document.querySelector('.grid-button');
gridButton.addEventListener('click', buttonClick);

const backgroundButton = document.querySelector('.background-button');
backgroundButton.addEventListener('click', changeBackground);





