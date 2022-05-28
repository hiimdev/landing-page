/* Open when someone clicks on the span element */
function openNav() {
    document.querySelector('.nav-mb').classList.add('nav-mb-active');
    document.querySelector('.nav-mb').classList.remove('nav-mb-hiden');
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.querySelector('.nav-mb').classList.add('nav-mb-hiden');
    document.querySelector('.nav-mb').classList.remove('nav-mb-active');
}

// Modal layout
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');
const btnClose = document.querySelector('.js-modal-footer-btn');

// Hàm hiển thị modal (thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open');
}

// Hàm ẩn modal (gỡ bỏ class open của modal)
function hideBuyTickets() {
    modal.classList.remove('open');
}

// lặp qua từng thẻ button và lắng nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

// lắng nghe hành vi click
modalClose.addEventListener('click', hideBuyTickets);
btnClose.addEventListener('click', hideBuyTickets);
modal.addEventListener('click', hideBuyTickets);

// Ẩn phần container khi nhấn vào modal (ngăn chặn hành vi nổi bọt)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});

// carousel customers
$('.customer-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    // adaptiveHeight: true,
    prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./assets/imgs/Icon/arrow-left.svg"/></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img src="./assets/imgs/Icon/arrow-left.svg"/></button>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
        },
    ],
});
