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
