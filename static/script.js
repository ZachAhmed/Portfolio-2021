var element = document.querySelector('.animated');
var t = document.getElementById('name');
var g = document.getElementsByClassName('generated');

function newFunction_1() {
    element.addEventListener('sal:in', function () {
        t.innerHTML = ('');
    });
}

function newFunction() {
    element.addEventListener('sal:out', function () {
        t.insertAdjacentHTML('beforeend', '<h1 className="md:pl-56"> <a href="/">Zach Ahmed</a> </h1>');
    });
}
