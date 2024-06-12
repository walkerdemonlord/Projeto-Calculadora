document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('.display input');
    const buttons = document.querySelectorAll('.buttons button');
    const clearButton = document.querySelector('.clear');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === '=') {
                calculate();
            } else if (buttonText === 'C') {
                clearDisplay();
            } else {
                addToDisplay(buttonText);
            }
        });
    });

    clearButton.addEventListener('click', () => {
        clearDisplay();
    });

    function calculate() {
        try {
            display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
        } catch (error) {
            display.value = 'Erro';
        }
    }

    function clearDisplay() {
        display.value = '';
    }

    function addToDisplay(value) {
        display.value += value;
    }
});
