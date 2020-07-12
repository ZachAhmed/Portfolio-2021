var element = document.querySelector('.animated');
var t = document.getElementById('name');
var g = document.getElementsByClassName('generated');


element.addEventListener('sal:in', function () {
    t.innerHTML = ('');
});



element.addEventListener('sal:out', function () {
    t.insertAdjacentHTML('beforeend', '<h1 className="md:pl-56"> <a href="/">Zach Ahmed</a> </h1>');
});

