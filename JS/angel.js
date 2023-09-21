// suma de items 

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector ('.input__plus');
let userInput = document.querySelector('.input__number');


let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});


minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if (userInputNumber <=0) {
        userInputNumber =0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});
// fin

// agregar total al carrito 

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInmodal();
    
});

// mostrar el modal con el detalle del carrito
const cartIconBtn = document.querySelector ('.header__cart');
const cartModal = document.querySelector ('.cart-modal');
const productContainer = document.querySelector ('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle ('show');

    if (lastValue === 0){
    productContainer.innerHTML = `<p class = "cart-empty">Your cart is empty</p>`;
    }else{
        drawProductInmodal();
    }
});

// borrar el contenido del carrito

function deleteProduct() {
    const deleteItemsBtn = document.querySelector ('.cart-modal__delete');
    deleteItemsBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = `<p class = "cart-empty">Your cart is empty</p>`;
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}

// cambiar imagenes al precionar boton flecha
const imageContainer = document.querySelector('.gallery__image-container3');
const prevGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');

let imgIndex = 1;

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer );
});

prevGalleryBtn.addEventListener('click', ()=>{
    changePreviusImage(imageContainer );
});

// mostrar el modal desktop

const modalImages = document.querySelector('.modal-gallery__background3');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', ()=>{
    modalImages.style.display = 'grid';
});

closeModalBtn.addEventListener('click', ()=>{
    modalImages.style.display = 'none';
});

// cambiar imagenes desde los thumnails
let thumnails = document.querySelectorAll ('.gallery__thumnails');
thumnails = [...thumnails]

thumnails.forEach(thumnail => {
    thumnail.addEventListener('click', event=>{
        console.log(event.target.id);
        imageContainer.style.backgroundImage = `url('../MEDIA/image-product3-${event.target.id}.png')`

    })
});

// cambiar img desde los thumnails de el modal
let modalThumnails = document.querySelectorAll ('.modal-gallery__thumnails');
const modalImageContainer = document.querySelector ('.modal-gallery__image-container3');
modalThumnails = [...modalThumnails]

modalThumnails.forEach(modalThumnail => {
    modalThumnail.addEventListener('click', event=>{
        console.log(event.target.id.slice(-1));
        modalImageContainer.style.backgroundImage = `url('../MEDIA/image-product3-${event.target.id.slice(-1)}.png')`
    })
});

// cambiar imagenes del modal desde botones
const nextModalBtn = document.querySelector ('.modal-gallery__next');
const prevModalBtn = document.querySelector ('.modal-gallery__previus');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
});

prevModalBtn.addEventListener('click', ()=>{
    changePreviusImage(modalImageContainer);
});

// mostrar navbar menu hamburguesa 
const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    console.log('abrir modal');
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});


// funciones
function drawProductInmodal() {
    productContainer.innerHTML = ` 
    <div class="cart-modal__details-container">
                    <img class="cart-modal__image" src="../MEDIA/image-product3-1.png" alt="">
                    <div>
                        <p class="cart-modal__product">Angel Cotton CrewNek</p>
                        <p class="cart-modal__price">$200 x3 <span>$600.00</span></p>
                    </div>
                    <img  class="cart-modal__delete" src="../MEDIA/borrar.png" alt="">
                </div>
                <div class="cart-modal__pay-off">
                    <a href="../CardPay.html"> <img class="cart-modal__pay"  src="../MEDIA/punto-de-venta.png" alt=""></a>
                </div>`
    deleteProduct();
    let pricesModal = document.querySelector ('.cart-modal__price');
    pricesModal.innerHTML = `$200 x${lastValue} <span>$${lastValue*200}.00</span>`;
}

function changeNextImage(imgContainer) {
    if (imgIndex == 4){
        imgIndex = 1
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../MEDIA/image-product3-${imgIndex}.png')`
   
}


function changePreviusImage(imgContainer) {
    if (imgIndex == 1){
        imgIndex = 4
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../MEDIA/image-product3-${imgIndex}.png')`
}