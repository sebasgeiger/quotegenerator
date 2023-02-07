function getCat() {
    let selector = document.getElementById('select');
    selector.disabled = false;
    let selected = document.getElementById('select').value;
    let quoteText = document.getElementById('blockquote');
    let quoteAuthor = document.getElementById('author');
    let cat = quotesArr.filter(quote => quote.category === selected);
    let rand = Math.floor(Math.random() * cat.length);
    quoteText.innerText = cat[rand].text;
      if (cat[rand].author === null) {
        quoteAuthor.innerText = "Anonymous";
      } else {
        quoteAuthor.innerText = cat[rand].author;
      };
  }

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
