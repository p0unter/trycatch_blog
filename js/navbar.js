const body = document.body;

const navbar = document.querySelector(".navbar");
const offcanvasLeftCont = document.querySelector(".offcanvas-left-cont");
const offcanvasLeft = document.querySelector(".offcanvas-left");

const openOffCanvasButton = document.querySelector(".openOffCanvasButton");
const searchButton = document.querySelector(".searchButton");

let isOpenOffCanvas = false;
function openOffCanvas() {
    if (!isOpenOffCanvas) {
        openOffCanvasButton.innerHTML = `<i class="ri-close-large-line"></i>`;
        openOffCanvasButton.style.backgroundColor = "rgba(255,255,255,.1)";

        offcanvasLeftCont.style.opacity = 1;
        offcanvasLeftCont.style.pointerEvents = "auto";
        offcanvasLeft.style.transform = "translateX(0%)";

        searchButton.style.display = "none";

        body.style.overflow = "hidden";
    } else {
        openOffCanvasButton.innerHTML = `<i class="ri-menu-line"></i>`;
        openOffCanvasButton.style.backgroundColor = "transparent";

        offcanvasLeftCont.style.opacity = 0;
        offcanvasLeftCont.style.pointerEvents = "none";
        offcanvasLeft.style.transform = "translateX(-100%)";

        searchButton.style.display = "inline-block";

        body.style.overflow = "auto";
    }
    isOpenOffCanvas = !isOpenOffCanvas;
}

offcanvasLeft.addEventListener('click', (event) => {
    event.stopPropagation();
});

const dropDownBtns = document.querySelectorAll(".drop-down .drop-down-btn");
const dropDownBtnsIcon = document.querySelectorAll(".drop-down .drop-down-btn i");
const ddShows = document.querySelectorAll(".drop-down .dd-show");

dropDownBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // Önceki açılan menüyü kapat
        // ddShows.forEach((ddShow, i) => {
        //     if (i !== index) {
        //         ddShow.style.height = 0;
        //     }
        // });

        // Tıklanan menüyü aç/kapat
        const ddShow = ddShows[index];
        if (ddShow.style.height === "max-content") {
            ddShow.style.height = 0;
            dropDownBtnsIcon[index].classList.remove("ri-arrow-up-s-line");
            dropDownBtnsIcon[index].classList.add("ri-arrow-down-s-line");
        } else {
            ddShow.style.height = "max-content";
            dropDownBtnsIcon[index].classList.add("ri-arrow-up-s-line");
            dropDownBtnsIcon[index].classList.remove("ri-arrow-down-s-line");
        }
    });
});

const searhContInput = document.querySelector(".searh-cont input");
function searchInputFocus() {
    searhContInput.focus();
}