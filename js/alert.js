document.addEventListener('DOMContentLoaded', function() {
    let loadAlert = `<span class="alert-pop alert-succes load-alert"><i class="ri-loop-right-line"></i> Sayfa yüklendi.</span>`;
    this.body.insertAdjacentHTML("afterbegin", loadAlert);
    setTimeout(() => {
        document.querySelector(".load-alert").style.opacity = 0;
        document.querySelector(".load-alert").style.transform = "translateX(100%)";
        setTimeout(() => {
            document.querySelector(".load-alert").remove();
        }, 1000);
    }, 1000);      
});