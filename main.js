const { findGiftCards } = require("./ultimate_gift_cards");

function main(shopsToFind) {
  let matchingGiftCards = [];
  for (let i = 0; i < shopsToFind.length; i++) {
    const query = shopsToFind[i];
    matchingGiftCards = findGiftCards(query, matchingGiftCards);
  }
  console.log(matchingGiftCards.join(", "));
}

const args = process.argv.slice(2);
main(args);
