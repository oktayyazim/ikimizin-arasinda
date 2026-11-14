
/* =====================================
   İKİMİZİN ARASINDA
   Tam JavaScript dosyası
===================================== */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const welcome = document.getElementById("welcome");
    const dashboard = document.getElementById("dashboard");
    const sectionView = document.getElementById("sectionView");

    const startButton = document.getElementById("startButton");
    const backButton = document.getElementById("backButton");

    const sectionTitle = document.getElementById("sectionTitle");
    const sectionDescription = document.getElementById("sectionDescription");
    const sectionQuestion = document.getElementById("sectionQuestion");

    // Bölümlerin içerikleri
    const sections = {

        understand: {
            title: "Birbirimizi Anlayalım",

            description:
                "Bazen karşımızdakinin ne hissettiğini anlamak için biraz daha dikkatli dinlememiz gerekir.",

            question:
                "İlişkimizde kendini en çok ne zaman anlaşılmış ve değerli hissediyorsun?"
        },

        misunderstanding: {
            title: "Yanlış Anlaşılmaları Çözelim",

            description:
                "Söylediklerimiz her zaman karşı tarafın anladığı şey olmayabilir. Burada birbirimizi suçlamadan konuşabiliriz.",

            question:
                "Son zamanlarda benim söylediğim ama senin farklı anladığın bir şey oldu mu? Aslında ne hissetmiştin?"
        },

        solutions: {
            title: "Ortak Çözüm",

            description:
                "Bir sorun yaşadığımızda birbirimize karşı değil, sorunun karşısında birlikte durabiliriz.",

            question:
                "Tartışma yaşadığımızda ikimizin de daha iyi hissetmesi için neyi farklı yapabiliriz?"
        },

        discover: {
            title: "Birbirimizi Keşfedelim",

            description:
                "Birbirimizi tanımak hiçbir zaman bitmez. Her zaman keşfedilecek yeni düşüncelerimiz ve hayallerimiz var.",

            question:
                "Benim hakkımda merak ettiğin ama henüz sormadığın bir şey var mı?"
        },

        story: {
            title: "Bizim Hikâyemiz",

            description:
                "Birlikte yaşadığımız güzel anları hatırlamak ve hikâyemizin küçük parçalarını biriktirmek için buradayız.",

            question:
                "Birlikte yaşadığımız hangi anı tekrar yaşamak isterdin ve neden?"
        }

    };


    // Giriş butonu
    startButton.addEventListener("click", function () {

        welcome.hidden = true;
        sectionView.hidden = true;
        dashboard.hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // Ana menü kartları
    const menuCards = document.querySelectorAll("[data-section]");

    menuCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const sectionId = card.dataset.section;
            const selectedSection = sections[sectionId];

            if (!selectedSection) {
                console.error("Bölüm bulunamadı:", sectionId);
                return;
            }

            sectionTitle.textContent = selectedSection.title;
            sectionDescription.textContent = selectedSection.description;
            sectionQuestion.textContent = selectedSection.question;

            dashboard.hidden = true;
            welcome.hidden = true;
            sectionView.hidden = false;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });


    // Ana menüye geri dön
    backButton.addEventListener("click", function () {

        sectionView.hidden = true;
        welcome.hidden = true;
        dashboard.hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    console.log("İkimizin Arasında başarıyla yüklendi. ♡");

});
