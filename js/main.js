var counter = document.querySelector('#counter');
var mainImage = document.querySelector('#main-image');

function increase() {
    counter.value = (+counter.value + 1);
}
function decrease() {
    if (+counter.value <= 0) {
        return;
    }
    counter.value = (+counter.value - 1);
}

function changeImage(event) {
    var elems = document.querySelectorAll(".cover");

    [].forEach.call(elems, function (el) {
        el.className = el.className.replace('cover', "");
    });

    event.classList.toggle('cover');
    var src = event.src.replace('-thumbnail', '');
    mainImage.src = src;
}