document.getElementById('date').innerHTML = Date();

function myFunction(){
    var earn = document.getElementById('input').value;
    var half = earn/2;
    var three = earn*0.3;
    var two = earn*0.2;
    document.getElementById('five').innerHTML = half;
    document.getElementById('three').innerHTML = three;
    document.getElementById('two').innerHTML = two;
}
