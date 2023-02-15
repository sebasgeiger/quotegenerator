document.getElementById("get").addEventListener("click",getCat);
//document.getElementById("get").addEventListener("click",changeImage);
document.getElementById("random").addEventListener("click",showOne);

function getCat() {
    let selector = document.getElementById('select');
    selector.disabled = false;
    let selected = document.getElementById('select').value;
    let quoteText = document.getElementById('blockquote');
    let quoteAuthor = document.getElementById('author');

    let quoteImage = document.getElementById('person');

    let cat = quotesArr.filter(quote => quote.category === selected);
    let rand = Math.floor(Math.random() * cat.length);
    quoteText.innerText = cat[rand].text;
      if (cat[rand].author === null) {
        quoteAuthor.innerText = "Anonymous";
      } 
      else {
        quoteAuthor.innerText = cat[rand].author;
      };
      if (cat[rand].image === null) {
        quoteImage.src = "img/original.jpg";
      }
      else {
        quoteImage.src = cat[rand].image;
      }
  }

/*   function changeImage() {
    let quoteAuthor = document.getElementById('author');
    var image = document.getElementById("person");
    if (quoteAuthor != "Yogi Berra") {
      image.src = "img/original.jpg";
    }
    else if (quoteAuthor = "Yogi Berra") {
      image.src = "img/yogi1.jpg";
    }
    else if (quoteAuthor = "Abraham Lncoln") {
      image.src = "img/lincoln.jpg";
    }
    else {
      image.src = "img/original.jpg";
    };
  } */

  function showOne() {
    let selector = document.getElementById('select');
    selector.disabled = true;
    let rand = Math.floor(Math.random() * 999);
    let quoteText = document.getElementById('blockquote');
    let quoteAuthor = document.getElementById('author');
    // fetch.then promise syntax
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => {
      quoteText.innerText = data[rand].text;
      if (data[rand].author === null) {
        quoteAuthor.innerText = "Anonymous";
      } else {
        quoteAuthor.innerText = data[rand].author;
      }
    });
  }

