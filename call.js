//caclulator
function plus() {
    var num1, num2; result;
    num1 = document.getElementById('n1').value;

    function newFunction() {
        num1 = parseInt(num1);

        num2 = document.getElementById('n2').value;
        num2 = parseInt(num2);

        result = num1 + num2;
        //innerHTML
        document.getElementById('out').innerHTML = result;
    }
}


    //Clock
window.onload = function(){
    window.setInterval(function(){
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
    },1000);
  };

