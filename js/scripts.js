const gridContainer = document.querySelector('.grid-container') 

function active(e) {
    console.log(e);
    const element = e.target;
    console.log(e.target);
    element.classList.add('active');
}

for (i = 1; i <= 16; i++) {
    const row = document.createElement('div');
    row.classList.add(`row${i}`, 'row');
    gridContainer.appendChild(row);

    for (j =1; j <= 16; j++) {
        const column = document.createElement('div');
        column.classList.add(`column${j}`, 'column');
        //column.textContent = `${i} ${j}`;
        column.addEventListener('mouseenter', active)
        row.appendChild(column);        
    }
}



