const input = document.getElementById("myInput");

// Update the table
function generateTableRow(cardName, shopNames, query) {
    const row = document.createElement("tr");
    const cardContainer = document.createElement("td");
    cardContainer.textContent = cardName;

    const shopNameContents = shopNames.map((name) => {
        if (query && name.toLowerCase().includes(query.toLowerCase())) {
            return `<b>${name}</b>`;
        }
        return name;
    }).join(", ");


    const shopsContainer = document.createElement("td");
    shopsContainer.innerHTML = shopNameContents;
    row.appendChild(cardContainer);
    row.appendChild(shopsContainer);
    return row;
}

function addStoreRows(cards, query) {
    const results = document.getElementById("results");
    results.textContent = "";
    cards.forEach(cardName => {
        const shopNames = giftCardData[cardName];
        const row = generateTableRow(cardName, shopNames, query);
        results.appendChild(row);
    });
}

function showNoResults() {
    const results = document.getElementById("results");
    results.textContent = "";
    const row = document.createElement("tr");
    const noResultsContainer = document.createElement("td");
    noResultsContainer.textContent = "No results found";
    noResultsContainer.setAttribute("colspan", "2");
    row.appendChild(noResultsContainer);
    results.append(row);
}

function onQueryChange(query) {
    const matchingCards = findGiftCards(query);
    if (matchingCards.length > 0) {
        addStoreRows(matchingCards, query);
    } else {
        showNoResults();
    }
};

// On first load, re-trigger search if necessary
if (input.value.length === 0) {
    // Show all the stores since query is empty
    addStoreRows(Object.keys(giftCardData));
} else {
    onQueryChange(input.value);
}

// Update shop list on input change
input.addEventListener("input", (event) => {
    const query = event.target.value;
    onQueryChange(query);
});
