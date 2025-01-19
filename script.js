const fortunes = [
    {
        category: "Aşk",
        image: "https://via.placeholder.com/150?text=Love", // Aşk görseli
        message: "Aşk seni bulacak, hazırlıklı ol!"
    },
    {
        category: "Kariyer",
        image: "https://via.placeholder.com/150?text=Career", // Kariyer görseli
        message: "İş yerinde büyük bir fırsat seni bekliyor!"
    },
    {
        category: "Şans",
        image: "https://via.placeholder.com/150?text=Luck", // Şans görseli
        message: "Bugün çok şanslısın! Her şey yolunda gidecek."
    },
    {
        category: "Sağlık",
        image: "https://via.placeholder.com/150?text=Health", // Sağlık görseli
        message: "Sağlığın mükemmel. Kendine iyi bak!"
    },
    {
        category: "Gelecek",
        image: "https://via.placeholder.com/150?text=Future", // Gelecek görseli
        message: "Geleceğin parlak! Yeni bir başlangıç için zamanı geldi."
    }
];

const button = document.getElementById("get-fortune-btn");
const fortuneContainer = document.getElementById("fortune-container");
const fortuneImage = document.getElementById("fortune-image");
const fortuneTitle = document.getElementById("fortune-title");
const fortuneText = document.getElementById("fortune-text");

button.addEventListener("click", function() {
    console.log("Butona tıkladınız!"); // Kontrol etmek için eklenen log

    // Rastgele fal seç
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selectedFortune = fortunes[randomIndex];

    // Fal içeriğini göster
    fortuneImage.src = selectedFortune.image;
    fortuneTitle.textContent = selectedFortune.category;
    fortuneText.textContent = selectedFortune.message;

    // Fal ekranını göster
    fortuneContainer.classList.remove("hidden");
});
