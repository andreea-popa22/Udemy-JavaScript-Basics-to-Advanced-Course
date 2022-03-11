var screen = document.getElementById('screen');

buttons = document.querySelectorAll('button');
console.log(buttons);
var screenValue = '';

function calculate(button) {
    var buttonText = button.innerHTML;
    if(buttonText == 'C') {
        screenValue = '';
        screen.value = screenValue;
    } else if(buttonText == '=') {
        screen.value = eval(screenValue);
    } else {
        screenValue += buttonText;
        screen.value = screenValue;
    }
}
