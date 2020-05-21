const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")

let alreadyRented = true 

for (let book in books){
  if (books[book].rented < 1){
    alreadyRented = false 
    break;
  }
}

if (alreadyRented){
  console.log("Oui, tous les livres ont été au moins empruntés une fois")
}
else {
  console.log("Non, tous les livres n'ont pas été empruntés au moins une fois")
}


console.log(' ')
console.log("*********************************************");
console.log(' ')

console.log("Quel est livre le plus emprunté ?")


  // function getMaxRented() {
  //   return books.reduce((max, book) => book.rented > max ? book.rented : max, books[0].rented);
  // }
  // console.log(getMaxRented())

let maxRented = 0;
let currentBook;

for (let book in books){
  if (books[book].rented > maxRented){
    maxRented = books[book].rented;
    currentBook = books[book];
  } 
}

console.log(currentBook.title + ' avec : ' + currentBook.rented )


console.log(' ')
console.log("*********************************************");
console.log(' ')

console.log("Quel est livre le moins emprunté ?")
let minRented = 10000;
let lessRentedBook;

for (let book in books){
  if (books[book].rented < minRented){
    minRented = books[book].rented;
    lessRentedBook = books[book];
  } 
}

console.log(lessRentedBook.title + ' avec : ' + lessRentedBook.rented )

console.log(' ')
console.log("*********************************************");
console.log(' ')

console.log("Le livre avec l'ID: 873495 est: ")

const bookById = books.find(book => book.id === 873495);
console.log(bookById.title);

console.log(' ')
console.log("*********************************************");
console.log(' ')

console.log("Supprimer le livre avec l'ID: 133712")
books.splice(books.findIndex(book => book.id == 133712), 1);
console.log(books)


console.log(' ')
console.log("*********************************************");
console.log(' ')

console.log("livres par ordre alphabétique:");

books.sort(function(a, b){
  if(a.title < b.title) { return -1; }
  if(a.title > b.title) { return 1; }
  return 0;
})

let filteredBooksByAlphabet = books.filter(function(book) {
  return console.log(book.title);
});