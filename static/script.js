const element = document.querySelector('.animated');
var t = document.getElementById('name');
var g = document.getElementsByClassName('generated');


element.addEventListener('sal:out', function () {
    t.insertAdjacentHTML('beforeend', '<h1 class="text-2xl font-serif text-white ml-5 p-1 z-50 ml-64">Zach Ahmed</h1>');
})


element.addEventListener('sal:in', function () {
    t.innerHTML=('');
})
