const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const darkMode = document.querySelector(".dark-mode")
const container = document.querySelector(".container")


let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value === "C") {
            currentInput = "";
        } else if (value === "=") {
            currentInput = eval(currentInput).toString();

        }
        else if (value === "back") {
            currentInput = currentInput.slice(0, -1);
        }
        else {
            currentInput += value;
        }

        display.value = currentInput;
    });
});

//Klaviatura dəstəyi
document.addEventListener("keydown", (e) => {
    const key = e.key;


    if ("0123456789+-*/.".includes(key)) {
        currentInput += key;
    } else if (key === "Enter") {
        currentInput = eval(currentInput).toString();
    } else if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
    }

    display.value = currentInput;
});

//Gece rejmi 
darkMode.addEventListener("click", () => {
    darkMode.classList.toggle("light-mode")
    container.classList.toggle("dark-theme");
})