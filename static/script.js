var element = document.querySelector('.animated');
var t = document.getElementById('name');
var g = document.getElementsByClassName('generated');


document.addEventListener('aos:out', ({ detail }) => {
        console.log('animated in', detail);
        t.innerHTML = ('');

        if (t == null) {
            t = "Zach Ahmed";
        }
}),
    
document.addEventListener('aos:in', ({ detail }) => {
        console.log('animated out', detail);
        t.insertAdjacentHTML('beforeend', '<h1 className="md:pl-56"> <a href="/">Zach Ahmed</a> </h1>');

        if (t == null) {

        }
});


