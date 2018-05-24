class box {
    constructor() {
        this._playerClicked = "",
        this._boxClicked = false
    }
}

var boxOne = new box();
var boxTwo = new box();
var boxThree = new box();
var boxFour = new box();
var boxFive = new box();
var boxSix = new box();
var boxSeven = new box();
var boxEight = new box();
var boxNine = new box();

var player = 1;
var playerOne;
var playerTwo;
var target = "";
var boxTarget;

document.addEventListener('click', function(e) {
    target = e.target.id
    playerTurn();
})

playerTurn = () => {
    player+= -1;
    switch (true) {
        case target.includes('1') :
            boxTarget = boxOne;
            break
        case target.includes('2') :
            boxTarget = boxTwo;
            break
        case target.includes('3') :
            boxTarget = boxThree;
            break
        case target.includes('4') :
            boxTarget = boxFour;
            break
        case target.includes('5') :
            boxTarget = boxFive;
            break
        case target.includes('6') :
            boxTarget = boxSix;
            break
        case target.includes('7') :
            boxTarget = boxSeven;
            break
        case target.includes('8') :
            boxTarget = boxEight;
            break
        case target.includes('9') :
            boxTarget = boxNine;
            break
    }
    if(player % 2 === 0) {
        document.getElementById(target).innerHTML = "X";
        boxTarget._boxClicked = true;
        boxTarget._playerClicked = "X";
    } else {
        document.getElementById(target).innerHTML = "0";
        boxTarget._boxClicked = true;
        boxTarget._playerClicked = "O";
    }
    checkResult();
}

checkResult = () => {
    if (boxOne._playerClicked === "X" && boxTwo._playerClicked === "X" && boxThree._playerClicked === "X") {
        document.getElementById('result').innerHTML = "PLAYER ONE WINS";
    } else if (boxFour._playerClicked === "X" && boxFive._playerClicked === "X" && boxSix._playerClicked === "X") {
        document.getElementById('result').innerHTML = "PLAYER ONE WINS";
    } else if (boxSeven._playerClicked === "X" && boxEight._playerClicked === "X" && boxNine._playerClicked === "X") {
        document.getElementById('result').innerHTML = "PLAYER ONE WINS";
    } else if (boxOne._playerClicked === "X" && boxFour._playerClicked === "X" && boxSeven._playerClicked === "X") {
        document.getElementById('result').innerHTML = "PLAYER ONE WINS";
    } else if (boxTwo._playerClicked === "X" && boxFive._playerClicked === "X" && boxEight._playerClicked === "X") {
        document.getElementById('result').innerHTML = "PLAYER ONE WINS";
    } else if (boxThree._playerClicked === "X" && boxSix._playerClicked === "X" && boxNine._playerClicked === "X") {
        document.getElementById('result').innerHTML = "PLAYER ONE WINS";
    } else if (boxOne._playerClicked === "X" && boxFive._playerClicked === "X" && boxNine._playerClicked === "X") {
        document.getElementById('result').innerHTML = "PLAYER ONE WINS";
    } else if (boxThree._playerClicked === "X" && boxFive._playerClicked === "X" && boxSeven._playerClicked === "X") {
        document.getElementById('result').innerHTML = "PLAYER ONE WINS";
    } else if (boxOne._playerClicked === "O" && boxTwo._playerClicked === "O" && boxThree._playerClicked === "O") {
        document.getElementById('result').innerHTML = "PLAYER TWO WINS";
    } else if (boxFour._playerClicked === "O" && boxFive._playerClicked === "O" && boxSix._playerClicked === "O") {
        document.getElementById('result').innerHTML = "PLAYER TWO WINS";
    } else if (boxSeven._playerClicked === "O" && boxEight._playerClicked === "O" && boxNine._playerClicked === "O") {
        document.getElementById('result').innerHTML = "PLAYER TWO WINS";
    } else if (boxOne._playerClicked === "O" && boxFour._playerClicked === "O" && boxSeven._playerClicked === "O") {
        document.getElementById('result').innerHTML = "PLAYER TWO WINS";
    } else if (boxTwo._playerClicked === "O" && boxFive._playerClicked === "O" && boxEight._playerClicked === "O") {
        document.getElementById('result').innerHTML = "PLAYER TWO WINS";
    } else if (boxThree._playerClicked === "O" && boxSix._playerClicked === "O" && boxNine._playerClicked === "O") {
        document.getElementById('result').innerHTML = "PLAYER TWO WINS";
    } else if (boxOne._playerClicked === "O" && boxFive._playerClicked === "O" && boxNine._playerClicked === "O") {
        document.getElementById('result').innerHTML = "PLAYER TWO WINS";
    } else if (boxThree._playerClicked === "O" && boxFive._playerClicked === "O" && boxSeven._playerClicked === "O") {
        document.getElementById('result').innerHTML = "PLAYER TWO WINS";
    } else if (boxOne._boxClicked && boxTwo._boxClicked && boxThree._boxClicked && boxFour._boxClicked && boxFive._boxClicked && boxSix._boxClicked && boxSeven._boxClicked && boxEight._boxClicked && boxNine._boxClicked) {
        location.reload(true);
    }
}