
/* =================================
   İKİMİZİN ARASINDA
   Ana JavaScript dosyası
================================= */

"use strict";

/**
 * Giriş butonuna basıldığında çalışır.
 * Ana menü henüz hazırlanmadığı için
 * kullanıcıya bilgilendirme gösterir.
 */
function startJourney() {
    alert(
        "Bizim hikâyemiz burada başlıyor. ♡\n\n" +
        "İkimizin Arasında çok yakında hazır olacak!"
    );
}

/* Sayfanın yüklenme kontrolü */
document.addEventListener("DOMContentLoaded", function () {
    console.log("İkimizin Arasında başarıyla yüklendi. ♡");
});
