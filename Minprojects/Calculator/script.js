const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        document.querySelectorAll('.op').forEach(b => b.classList.remove('active-op'));

        if (value === 'AC') {
            currentInput = "";
            display.value = "";
        }
        else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput || "";
        }
        else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        }
        else {
            if (['+', '-', '*', '/'].includes(value)) {
                button.classList.add('active-op');
            }
            currentInput += value;
            display.value = currentInput;
        }
    });
});