//const quotes = document.getElementById("quotes");

const getQuotes = (results) => {
  return results.reduce((acc, item) => [...acc, item, quote], []);
};

const fetchQuoteEng = () => {
    fetch("https://ataturk.now.sh/en")
        .then((response) => response.json())
        .then((data) => (quotes.innerHTML = data.quote));
};

const fetchQuoteTr = () => {
    fetch("https://ataturk.now.sh/tr")
        .then((response) => response.json())
        .then((data) => (quotes.innerHTML = data.quote));
};