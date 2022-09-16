const gridContainer = document.querySelector('.grid-container')

function makeRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (i=0; i < (rows*cols); i++) {
        let cell = document.createElement('div');
        cell.textContent = (i+1);
        gridContainer.appendChild(cell).className = ('grid-item');
    };
};




makeRows(16,16)

const gridItem =  document.querySelectorAll('.grid-item');


gridItem.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'red';
    });
});