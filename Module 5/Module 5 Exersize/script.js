async function randomQuote() {

    var quoteText = document.getElementById('quote');
    var author = document.getElementById('author');
    var dd = document.getElementById('dd');
    var quoteLength = dd.value;

    const response = await fetch('https://api.quotable.io/random' + quoteLength)
    const quote = await response.json()
    
    // Output the quote and author name
    quoteText.innerHTML = quote.content;
    author.innerHTML = quote.author;
    console.log(quote.content)
    console.log(`- ${quote.author}`)
  }