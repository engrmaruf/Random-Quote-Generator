const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

function getRandomQuote() {
  const apiUrl = "https://api.quotable.io/random";
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      return {
        quote: data.content,
        author: data.author
      };
    })
    .catch(error => console.log(error));
}

function displayQuote() {
  getRandomQuote()
    .then(quote => {
      quoteElement.textContent = quote.quote;
      authorElement.textContent = "- " + quote.author;
    });
}

newQuoteButton.addEventListener("click", displayQuote);

// Display initial quote
displayQuote();
