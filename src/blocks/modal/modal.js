
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

const openSidebar = document.querySelector('.open-sidebar');

openSidebar.addEventListener('click', function () {
    const modalName = openSidebar.getAttribute('name');
    const curentModal = document.getElementById(modalName);
    modalOpen(curentModal);
});

const openCall = document.querySelector('.open-call');

openCall.addEventListener('click', function () {
    const modalName = openCall.getAttribute('name');
    const curentModal = document.getElementById(modalName);
    modalOpen(curentModal);
});

const openFeedback = document.querySelector('.open-feedback');

openFeedback.addEventListener('click', function () {
    const modalName = openFeedback.getAttribute('name');
    const curentModal = document.getElementById(modalName);
    modalOpen(curentModal);
});

let unlock = true;

const timeout = 800;


const closeSidebar = document.querySelector('.modal__close--sidebar');
closeSidebar.addEventListener('click', function () {
    const curentModal = document.querySelector('.modal__open');
    modalClose(curentModal);
});

const closeFeedback = document.querySelector('.modal__close--feedback');
closeFeedback.addEventListener('click', function () {
    const curentModal = document.querySelector('.modal__open');
    modalClose(curentModal);
});

const closeCall = document.querySelector('.modal__close--call');
closeCall.addEventListener('click', function () {
    const curentModal = document.querySelector('.modal__open');
    modalClose(curentModal);
});


function modalOpen(curentModal) {
    if (curentModal && unlock) {
        const modalActive = document.querySelector('.modal__open');
        if (modalActive) {
            modalClose(modalActive, false);
        } else {
            bodyLock();
        }
        curentModal.classList.add('modal__open');
        overlay.classList.add('overlay__open');
        curentModal.addEventListener('click', function (e) {
            if (!e.target.closest('.modal__content')) {
                modalClose(e.target.closest('.modal'));
            }
        });
    }

}

function modalClose (modalActive, doUnlock = true) {
    if (unlock) {
        modalActive.classList.remove('modal__open');
        overlay.classList.remove('overlay__open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {

    setTimeout(function () {
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);    
}

document.addEventListener('keydown', function (event) {
    if (event.code === 27) {
        const modalActive = document.querySelector('.modal__open');
        modalClose(modalActive);
    }
});