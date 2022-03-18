const container = document.querySelector(".container")
const books = [
  { name: "Harry Potter and the Sorcerer's Stone", image: "Image/Book1.jpg" },
  { name: "The Hobbit", image: "Image/Book2.jpg" },
  { name: "The Great Gatsby", image: "Image/Book3.jpg" },
  { name: "Coraline", image: "Image/Book4.jpg" },
  { name: "To Kill A Mockingbird", image: "Image/Book5.jpg" },
  { name: "Little Women", image: "Image/Book6.jpg" },
  { name: "Sasuke Retsuden", image: "Image/Book7.jpg" },
  { name: "Kakashi Retsuden", image: "Image/Book8.jpg" },
  { name: "Naruto Retsuden", image: "Image/Book9.jpg" },
  { name: "Bumi", image: "Image/Book10.jpg" },
  { name: "Bulan", image: "Image/Book11.jpg" },
  { name: "Tenggelamnya Kapal Van der Wijk", image: "Image/Book12.jpg" },
]

const showBooks = () => {
    let output = ""
    books.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="https://www.amazon.com/s?k=fiction&i=stripbooks-intl-ship&crid=ICPDL5BLW65Z&sprefix=fiction%2Cstripbooks-intl-ship%2C388&ref=nb_sb_noss_1">Buy</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showBooks);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }