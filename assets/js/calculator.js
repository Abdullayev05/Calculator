let output = document.getElementById('output');
let buttons = document.querySelectorAll('.calculator button:not(.equal)');
let display_C = document.getElementById('#c_btn')
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        output.value += button.textContent;
        c_btn.addEventListener('click', function() {
            output.value = '';
        });
        });
});
document.querySelector('.equal').addEventListener('click', function() {
    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = 'Xəta baş verdi';
    }
});