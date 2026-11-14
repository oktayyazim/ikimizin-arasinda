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

    const myAnswer = document.getElementById("myAnswer");
    const herAnswer = document.getElementById("herAnswer");

    const myAnswerStatus = document.getElementById("myAnswerStatus");
    const herAnswerStatus = document.getElementById("herAnswerStatus");

    let currentSectionId = null;

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


    // Cevapların kaydedileceği anahtar
    function getStorageKey(sectionId, person) {
        return "ikimizin-arasinda-" + sectionId + "-" + person;
    }


    // Kaydedilmiş cevapları ekrana getir
    function loadAnswers(sectionId) {

        myAnswer.value = "";
        herAnswer.value = "";

        myAnswerStatus.textContent = "Henüz kaydedilmedi";
        herAnswerStatus.textContent = "Henüz kaydedilmedi";

        try {

            const savedMyAnswer = localStorage.getItem(
                getStorageKey(sectionId, "me")
            );

            const savedHerAnswer = localStorage.getItem(
                getStorageKey(sectionId, "her")
            );

            if (savedMyAnswer !== null) {
                myAnswer.value = savedMyAnswer;
                myAnswerStatus.textContent = "Kaydedilmiş cevap";
            }

            if (savedHerAnswer !== null) {
                herAnswer.value = savedHerAnswer;
                herAnswerStatus.textContent = "Kaydedilmiş cevap";
            }

        } catch (error) {

            console.error("Cevaplar yüklenemedi:", error);

            myAnswerStatus.textContent = "Kayıt okunamadı";
            herAnswerStatus.textContent = "Kayıt okunamadı";

        }

    }


    // Cevabı kaydet
    function saveAnswer(person) {

        if (!currentSectionId) {
            return;
        }

        const isMe = person === "me";

        const answerInput = isMe ? myAnswer : herAnswer;
        const status = isMe ? myAnswerStatus : herAnswerStatus;

        try {

            localStorage.setItem(
                getStorageKey(currentSectionId, person),
                answerInput.value
            );

            status.textContent = "Başarıyla kaydedildi ♡";

        } catch (error) {

            console.error("Cevap kaydedilemedi:", error);

            status.textContent = "Kaydedilemedi. Tarayıcı alanını kontrol et.";

        }

    }


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

            currentSectionId = sectionId;

            sectionTitle.textContent = selectedSection.title;
            sectionDescription.textContent = selectedSection.description;
            sectionQuestion.textContent = selectedSection.question;

            loadAnswers(sectionId);

            dashboard.hidden = true;
            welcome.hidden = true;
            sectionView.hidden = false;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });


    // Kaydet butonları
    const saveButtons = document.querySelectorAll(".save-button");

    saveButtons.forEach(function (button) {

        button.addEventListener("click", function () {
            saveAnswer(button.dataset.person);
        });

    });


    // Ana menüye geri dön
    backButton.addEventListener("click", function () {

        sectionView.hidden = true;
        welcome.hidden = true;
        dashboard.hidden = false;

        currentSectionId = null;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    console.log("İkimizin Arasında başarıyla yüklendi. ♡");

});
