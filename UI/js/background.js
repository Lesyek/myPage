var body    = document.getElementById('fancy-background');
var number1 = Math.floor(Math.random() * 255);
var number2 = Math.ceil(Math.random() * 255);
var number3 = Math.floor(255 / number2);

function bgGenerator() {
    var direction1 = 1;
    var direction2 = 1;
    var direction3 = 1;

    function toggleDirection(direction) {
        if (direction > 0) {
            return -1;
        } else {
            return 1;
        }
    }

    function changeBg(number1, number2, number3) {
        var color1 = 'rgb('+ number1 +', '+ number2 +', '+ number3 +')';
        var color2 = 'rgb('+ number3 +', '+ number2 +', '+ number1 +')';
        body.style.background = color1;
        body.style.background = '-moz-linear-gradient(-45deg, '+ color1 +' 0%, '+ color1 +' 11%, '+ color2 +' 93%, '+ color2 +' 100%)';
        body.style.background = '-webkit-gradient(left top, right bottom, color-stop(0%, '+ color1 +'), color-stop(11%, '+ color1 +'), color-stop(93%, '+ color2 +'), color-stop(100%, '+ color2 +'))';
        body.style.background = '-webkit-linear-gradient(-45deg, '+ color1 +' 0%, '+ color1 +' 11%, '+ color2 +' 93%, '+ color2 +' 100%)';
        body.style.background = '-o-linear-gradient(-45deg, '+ color1 +' 0%, '+ color1 +' 11%, '+ color2 +' 93%, '+ color2 +' 100%)';
        body.style.background = '-ms-linear-gradient(-45deg, '+ color1 +' 0%, '+ color1 +' 11%, '+ color2 +' 93%, '+ color2 +' 100%)';
        body.style.background = 'linear-gradient(135deg, '+ color1 +' 0%, '+ color1 +' 11%, '+ color2 +' 93%, '+ color2 +' 100%)';
    }

    window.setInterval(function() {
        changeBg(number1,number2,number3);
        number1 = number1 + (2 * direction1);
        if ((direction1 > 0 && number1 > 252) || (direction1 < 0 && number1 < 3)) {
            direction1 = toggleDirection(direction1);
        }
        number2 = number2 + (2 * direction2);
        if ((direction2 > 0 && number2 > 252) || (direction2 < 0 && number2 < 3)) {
            direction2 = toggleDirection(direction2);
        }
        number3 = number3 + (2 * direction3);
        if ((direction3 > 0 && number3 > 252) || (direction3 < 0 && number3 < 3)) {
            direction3 = toggleDirection(direction3);
        }
    }, 44);
}

(function firstBg() {
    var color1 = 'rgb('+ number1 +', '+ number2 +', '+ number3 +')';
    var color2 = 'rgb('+ number3 +', '+ number2 +', '+ number1 +')';
    body.style.background = color1;
    body.style.background = '-moz-linear-gradient(-45deg, '+ color1 +' 0%, '+ color1 +' 11%, '+ color2 +' 93%, '+ color2 +' 100%)';
    body.style.background = '-webkit-gradient(left top, right bottom, color-stop(0%, '+ color1 +'), color-stop(11%, '+ color1 +'), color-stop(93%, '+ color2 +'), color-stop(100%, '+ color2 +'))';
    body.style.background = '-webkit-linear-gradient(-45deg, '+ color1 +' 0%, '+ color1 +' 11%, '+ color2 +' 93%, '+ color2 +' 100%)';
    body.style.background = '-o-linear-gradient(-45deg, '+ color1 +' 0%, '+ color1 +' 11%, '+ color2 +' 93%, '+ color2 +' 100%)';
    body.style.background = '-ms-linear-gradient(-45deg, '+ color1 +' 0%, '+ color1 +' 11%, '+ color2 +' 93%, '+ color2 +' 100%)';
    body.style.background = 'linear-gradient(135deg, '+ color1 +' 0%, '+ color1 +' 11%, '+ color2 +' 93%, '+ color2 +' 100%)';
})();

setTimeout(function() {
   bgGenerator();
}, 7000);
