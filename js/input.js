const inputGroup = document.querySelectorAll(".input-group");
let indexValue = 0;

inputGroup.forEach(group => {
    const input = group.querySelector("input");
    const placeholderIG = group.querySelector(".text-placeholder");
    
    input.addEventListener("focus", () => {
        placeholderIG.style.transform = "translateY(-150%)"; // Yukarı taşıma
        placeholderIG.style.borderTop = "1px solid #000";
    });
    
    input.addEventListener("blur", () => {
        if (input.value === "") {
            placeholderIG.style.transform = "";
            placeholderIG.style.borderTop = "none";
        }
    });
});

function nextInputFunction() {
    // input'un değerini al
    const currentInputValue = inputGroup[indexValue].querySelector("input").value;
    console.log(currentInputValue); // Değeri kontrol et

    if (currentInputValue !== "") {
        if (indexValue < inputGroup.length - 1) {
            inputGroup[indexValue].style.display = "none"; // Mevcut grubu gizle
            indexValue++; // İndeksi artır
            inputGroup[indexValue].style.display = "block"; // Bir sonraki grubu göster
            console.log(indexValue);
            document.querySelector(".buttons .register").style.display = "none";

            if (indexValue == 1) {
                document.querySelector(".buttons .btn-prev").style.display = "inline-block";
            }
        } 
        if (indexValue == inputGroup.length - 1) {
            document.querySelector(".buttons .btn-login").innerText = "Bitir";
        }
    } else {
        alert("Kutucukları boş veya hatalı bıraktınız.")
    }
}

function prevInputFunction() {
    document.querySelector(".buttons .btn-login").innerText = "Devam Et";

    if (indexValue == 1) {
        document.querySelector(".buttons .register").style.display = "inline-block";
        document.querySelector(".buttons .btn-prev").style.display = "none";
    }
    console.log(indexValue);
    if (indexValue > 0) {
        inputGroup[indexValue].style.display = "none"; // Mevcut grubu gizle
        indexValue--; // İndeksi azalt
        inputGroup[indexValue].style.display = "block"; // Önceki grubu göster
    } 
}