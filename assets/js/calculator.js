document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input_calc');
    const buttons = document.querySelectorAll('.calc_buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'AC') {
                input.value = "";
            } else if (button.textContent === 'C') {
                input.value = input.value.slice(0, -1);
            } else if (button.textContent === '=') {
                try {
                    input.value = eval(input.value.replace('×', '*').replace('÷', '/').replace(',', '.'));
                } catch (e) {
                    input.value = 'Error';
                }
            } else {
                input.value += button.textContent;
            }
        });
    });
})
