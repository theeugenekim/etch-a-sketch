const gridContainer = document.querySelector('.grid-container');
const mainContainer = document.querySelector('.main-container');
const inputValue = document.querySelector('#input-box').value;
const createGridButton = document.querySelector('.create-grid');

window.onload = buttonClick()

function makeGrid(rows, cols) {
    let width = 700;
    let height = 700;
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (i=0; i < (rows*cols); i++) {
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = ('grid-item');
    };
    gridContainer.style.cssText ="grid-template-columns: repeat(auto-fill, minmax("+ width/cols +"px, 1fr)); grid-template-rows: repeat(auto-fill, minmax("+height/rows+"px, 1fr));"
    return gridContainer
};

function hover() {
    const gridItem =  document.querySelectorAll('.grid-item');
    createGridButton.addEventListener('click', buttonClick);

    gridItem.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'red';
        });
    });
}

function validateInput(inputValue) {
    if (inputValue < 1 || inputValue > 100) {
        displayWarning()
        resetGame()
        makeGrid(100, 100);
        return false
    } else {
        document.querySelector(".instructions").style.color = "black";
        return true
    };
};

function displayWarning() {
    document.querySelector(".instructions").style.color = "red";
    return true
};

function resetGame() {
    // clear all DOM in grid-container node https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    gridContainer.replaceChildren();
}

function buttonClick() {
    resetGame()

    const inputValue = document.querySelector('#input-box').value;
    const validInput = validateInput(inputValue);
    

    if (validInput === true) {
        makeGrid(inputValue, inputValue);
        console.log('hello');
        hover();
    } 
};