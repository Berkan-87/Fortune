function slugify(title) {
    return title
      .trim()                        // Başındaki ve sonundaki boşlukları temizler
      .toLowerCase()                 // Tüm harfleri küçük yapar
      .replace(/\s+/g, '-')          // Birden fazla boşluğu tek bir tire ile değiştirir
      .replace(/[^\w-]/g, '');       // Harfler, rakamlar ve tire dışında kalan karakterleri temizler
  }
  
  console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
  console.log(slugify("English for developer")); // "english-for-developer"
  console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
  console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
  