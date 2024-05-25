let buttons = document.querySelectorAll('.Box');
let reset = document.querySelector('.ResetButton');
let currentPlayer = "X";
let mesg = document.querySelector('.msg');
let gmcont = document.querySelector('.GameContainer');

// Changing Text For Each Button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentPlayer === "X") {
            button.innerText = "X";
            currentPlayer = "O";
        }
        else {
            button.innerText = "O";
            currentPlayer = "X";
        }
        button.disabled = true;
        checkWinner();
    });
});

// Resting The Game And Making ALl The Buttons To Blank
reset.addEventListener('click', () => {
    buttons.forEach((button) => {
        button.innerText = "";
        button.disabled = false;
        mesg.classList.add("hide");
        gmcont.classList.remove("hide");
        currentPlayer = "X";
    });
});

//Delcaring Winning Conditions
const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Delcaing Winning Function
const checkWinner = () => {
    for (let pattern of winner) {
        let p1 = buttons[pattern[0]].innerText;
        let p2 = buttons[pattern[1]].innerText;
        let p3 = buttons[pattern[2]].innerText;
        {
            if (p1 != "" && p2 != "" && p3 != "") {
                if (p1 === p2 && p2 === p3) {
                    mesg.classList.remove("hide");
                    gmcont.classList.add("hide");
                    mesg.innerText = `Congratulations ${p1}, You Won The Game!🏆`;
                }
            }
        }
    }
}

//Action For Dark Mode
let checkbox = document.querySelector('.theme-switch__checkbox');
let mode = "light";

checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
        mode = "dark";
        document.querySelector('body').style.backgroundColor = 'rgb(73, 73, 73)';
        document.querySelector('.ResetButton').style.backgroundColor = 'antiquewhite';
        document.querySelector('.ResetButton').style.color = 'black';

    } else {
        mode = "light";
        document.querySelector('body').style.backgroundColor = 'antiquewhite';
        document.querySelector('.ResetButton').style.backgroundColor = 'rgb(88, 88, 88)';
        document.querySelector('.ResetButton').style.color = 'white';
    }
});

