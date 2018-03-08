// document.getElementById('slider_left').onclick = sliderLeft;
var left = 0;
var timer;
autoSlider();

function autoSlider() {
    timer = setTimeout(function () {
        var polosa = document.getElementById('polosa');
        left -= 128;
        if (left < -512) {
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left + 'px';
        autoSlider()
    }, 1000);
}
