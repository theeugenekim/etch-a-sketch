const gridContainer = document.querySelector('.grid-container');
const mainContainer = document.querySelector('.main-container');
const inputValue = document.querySelector('#input-box').value;
const createGridButton = document.querySelector('.create-grid');

window.onload = buttonClick()

// Functions //

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

    var colorBrightness = 60
    var randomColor

    gridItem.forEach(item => {
        item.addEventListener('mouseover', () => {
            if (colorBrightness === 100) {
                randomColor = Math.floor(Math.random()*16777215).toString(16);
                item.style.backgroundColor = '#' + randomColor;
                item.style.filter = "brightness(100%)";
                colorBrightness -= 10
            } else if (colorBrightness > 0) {
                item.style.backgroundColor = '#' + randomColor;
                item.style.filter = "brightness(" + Math.round(colorBrightness) + "%)";
                colorBrightness -= 10
            } else {
                item.style.backgroundColor = '#' + randomColor;
                item.style.filter = "brightness(0%)";
                colorBrightness = 100
            };
            console.log(colorBrightness)
        });
    });
};


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
    colorBrightness = 100
}

function buttonClick() {
    resetGame()

    const inputValue = document.querySelector('#input-box').value;
    const validInput = validateInput(inputValue);
    

    if (validInput === true) {
        makeGrid(inputValue, inputValue);
        hover();
    } 
};