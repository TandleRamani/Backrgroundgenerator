const color1 = document.getElementById('color_1');
const color2 = document.getElementById('color_2');
const gradientBtn = document.getElementById('gradientBtn');
const body = document.querySelector('body');

gradientBtn.addEventListener('click', function() {
    body.style.background = `linear-gradient(to right, ${color_1.value}, ${color_2.value})`;
});
