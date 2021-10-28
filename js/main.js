var counter = document.querySelector('#counter');
var mainImage = document.querySelector('#main-image');
var modelMainImage = document.querySelector('#modelMainImage');
var cart = document.querySelector('.cart-box');
var menu = document.querySelector('.menu');

function increase() {
    counter.value = (+counter.value + 1);
}
function decrease() {
    if (+counter.value <= 1) {
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


function showCart() {
    cart.classList.toggle('cart-box-show');
}


function addItem() {
    document.querySelector(".cart-content").innerHTML = `<img src="./images/image-product-1-thumbnail.jpg">
    <div class="details">
      <p class="product-name">Fall Limited Edition Sneakers</p>
      <p class="price">$125.00<span class="count">x` + counter.value + `</span><span class="total">$` + (+counter.value * 125.00) + `</span> <span
          class="icon"><img src="./images/icon-delete.svg" alt=""></span></p>
    </div>
    <div class="break"><br></div>
    <button class="btn">Checkout</button>`;
}


function changeModelImage(event) {
    var elems = document.querySelectorAll(".cover");

    [].forEach.call(elems, function (el) {
        el.className = el.className.replace('cover', "");
    });

    event.classList.toggle('cover');
    var src = event.src.replace('-thumbnail', '');
    modelMainImage.src = src;
}

function showModel() {
    if (window.innerWidth > 600) {
        var model = document.querySelector('.model')
        model.classList.toggle('show-model');

        var elems = document.querySelectorAll(".cover");

        [].forEach.call(elems, function (el) {
            el.className = el.className.replace('cover', "");
        });

        var elm = document.querySelectorAll('.model .thumbnails img')
        elm[0].classList.toggle('cover');
    }
}

function nextImage() {

    var next = document.querySelector('.cover').nextElementSibling;
    if (!next) {
        return;
    }
    var src = next.src.replace('-thumbnail', '');
    if (window.innerWidth > 600) {
        modelMainImage.src = src;
    } else {
        mainImage.src = src;
    }

    var elems = document.querySelectorAll(".cover");

    [].forEach.call(elems, function (el) {
        el.className = el.className.replace('cover', "");
    });

    next.classList.toggle('cover');
}

function previousImage() {

    var prev = document.querySelector('.cover').previousElementSibling;

    if (!prev) {
        return;
    }
    var src = prev.src.replace('-thumbnail', '');
    if (window.innerWidth > 600) {
        modelMainImage.src = src;
    } else {
        mainImage.src = src;
    }

    var elems = document.querySelectorAll(".cover");

    [].forEach.call(elems, function (el) {
        el.className = el.className.replace('cover', "");
    });

    prev.classList.toggle('cover');
}


function showMenu() {
    menu.classList.add('show-menu');
}

function hideMenu() {
    menu.classList.remove('show-menu');
}