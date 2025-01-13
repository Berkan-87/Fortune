function filterArray(numbers, value) {
  const newArray = []; // Sonuçları tutacağımız yeni dizi

  // numbers dizisindeki her öğeyi kontrol etmek için döngü
  for (const number of numbers) {
    if (number > value) { // Eğer number, value'dan büyükse
      newArray.push(number); // number'ı yeni diziye ekle
    }
  }

  return newArray; // Yeni diziyi döndür
}

// Testler
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
