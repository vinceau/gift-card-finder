const giftCardData = {
  "Active & Wellness": ["99 Bikes", "adidas", "Adrenaline", "Anaconda", "Cotton On Body", "EveryPlate", "Foot Locker", "Hello Fresh", "iFLY", "INTERSPORT", "JD Sports", "Kingpin", "Lorna Jane", "LSKD", "lululemon", "My Muscle Chef", "Natio", "New Balance", "Nike", "Puma", "Rip Curl", "SENSORI+", "Speedo", "The Iconic", "Timezone", "TripGift", "UFC Fight Pass", "Under Armour", "Zone Bowling."],
  "Baby & Mum": ["Build-A-Bear Workshop", "Cotton On Body", "Cotton On Kids", "Ella Baché", "EveryPlate", "H&M", "Hello Fresh", "Michael Hill", "Modibodi", "My Muscle Chef", "OZSALE", "Peter Alexander", "Prouds", "Purebaby", "Roblox", "Seed", "T2", "The Good Guys", "The Iconic", "The Memo", "The Stork Nest", "Toyworld"],
  "Beauty & Spa": ["Cotton On Body", "Dusk", "Ella Baché", "Just Cuts", "MAC", "Michael Hill", "Natio", "OZSALE", "SENSORI+", "Sephora", "The Body Shop", "The Iconic"],
  "Eats": ["Ben & Jerry's", "Boost Juice", "Chatime", "Crust", "Donut King", "Gloria Jean's", "Grill'd", "Hog's Breath Cafe", "Mad Mex", "Menulog", "My Muscle Chef", "Nando's", "Ribs & Burgers", "San Churro", "Schnitz", "Subway", "Sushi Hub"],
  "Everyone": ["adidas", "Adrenaline", "Anaconda", "Angus & Coote", "ASOS", "Autobarn", "Barbeques Galore", "Ben & Jerry's", "Binge", "Chatime", "City Beach", "COSETTE", "Cotton On", "Cotton On Body", "Cotton On Kids", "Crust", "Donut King", "Dusk", "EB Games", "Ella Baché", "EveryPlate", "Factorie", "Foot Locker", "Forever New", "General Pants Co.", "Gloria Jean's", "Goldmark", "H&M", "Hello Fresh", "House", "Hoyts", "iFLY", "INTERSPORT", "JB Hi-Fi", "JD Sports", "Just Cuts", "Kayo Sports", "Kingpin", "Kogan", "Lorna Jane", "LSKD", "lululemon", "Luxury Escapes", "MAC", "Menulog", "Michael Hill", "Modibodi", "My Muscle Chef", "Nando's", "Natio", "New Balance", "Officeworks", "Ovolo Hotels", "OZSALE", "Peter Alexander", "Prouds", "Puma", "RedBalloon", "Rip Curl", "Roblox", "Rubi", "Smiggle", "Star Car Wash", "Subway", "Supré", "T2", "Temple & Webster", "The Good Guys", "The Iconic", "Timezone", "Toyworld", "TripGift", "Typo", "UFC Fight Pass", "Weber", "Webjet", "ZiNG Pop Culture", "Zone Bowling."],
  "Gaming & Bites": ["Binge", "Chatime", "Crust", "Donut King", "EB Games", "Gloria Jean's", "JB Hi-Fi", "Kayo Sports", "Menulog", "Nando's", "Razer Gold", "Roblox", "Subway", "UFC Fight Pass", "Xbox", "Xbox Game Pass", "ZiNG Pop Culture"],
  "Her": ["adidas", "Anaconda", "ASOS", "Bras N Things", "COSETTE", "Cotton On", "Cotton On Body", "Ella Baché", "Factorie", "Forever New", "H&M", "Hoyts", "INTERSPORT", "JD Sports", "Lorna Jane", "LSKD", "lululemon", "MAC", "Modibodi", "Natio", "Nike", "Nine West", "OZSALE", "Pandora", "Peter Alexander", "Rip Curl", "Roblox", "Seed", "Sephora", "Supré", "Swarovski", "T2", "Temple & Webster", "The Body Shop", "The Iconic", "Wittner"],
  "Him": ["99 Bikes", "adidas", "Adrenaline", "Anaconda", "ASOS", "Autobarn", "Barbeques Galore", "Binge", "Cotton On", "EB Games", "Factorie", "Foot Locker", "H&M", "Hoyts", "INTERSPORT", "JB Hi-Fi", "JD Sports", "Kayo Sports", "Kingpin", "LSKD", "lululemon", "My Muscle Chef", "Natio", "Nike", "Oakley", "Oxford", "OZSALE", "RedBalloon", "Rip Curl", "Roblox", "Speedo", "Star Car Wash", "The Iconic", "Timezone", "UFC Fight Pass", "Weber", "Xbox", "yd", "ZiNG Pop Culture", "Zone Bowling"],
  "Home": ["Amart Furniture", "Autobarn", "Baccarat", "Barbeques Galore", "Bessemer", "Dusk", "House", "House Bed & Bath", "JB Hi-Fi", "Kogan", "MyHouse", "Officeworks", "Ovolo Hotels", "OZSALE", "Pet Circle", "Pet House", "Robins Kitchen", "Star Car Wash", "Temple & Webster", "The Good Guys", "The Iconic", "Typo", "Weber"],
  "Kids": ["adidas", "Build-A-Bear Workshop", "Cotton On Kids", "EB Games", "Foot Locker", "H&M", "Holey Moley", "Hoyts", "iFLY", "INTERSPORT", "JB Hi-Fi", "Kingpin", "Officeworks", "Roblox", "Smiggle", "Strike", "The Iconic", "Timezone", "Toyworld", "Xbox", "ZiNG Pop Culture", "Zone Bowling"],
  "Students": ["adidas", "ASOS", "Ben & Jerry's", "Boost Juice", "Chatime", "City Beach", "Cotton On", "Donut King", "EB Games", "Foot Locker", "General Pants Co.", "Grill'd", "H&M", "Holey Moley", "Hoyts", "INTERSPORT", "JD Sports", "Just Cuts", "Kathmandu", "Kingpin", "Officeworks", "Puma", "Roblox", "Strike", "Subway", "The Iconic", "Timezone", "Typo", "UFC Fight Pass", "Webjet", "Xbox", "yd", "ZiNG Pop Culture", "Zone Bowling"],
  "Style/Shopping": ["Angus & Coote", "ASOS", "Bras N Things", "COSETTE", "Cotton On", "Cotton On Body", "Dangerfield", "Factorie", "Foot Locker", "Forever New", "General Pants Co.", "JD Sports", "LSKD", "Modibodi", "Nike", "Nine West", "OZSALE", "Pandora", "Sportsgirl", "Sunglasses Hut", "Supré", "Temple & Webster", "The Iconic", "yd"],
  "Teens": ["adidas", "Ben & Jerry's", "Boost Juice", "Chatime", "City Beach", "Cotton On", "Cotton On Body", "EB Games", "Factorie", "Foot Locker", "Gloria Jean's", "Grill'd", "H&M", "Hoyts", "INTERSPORT", "JB Hi-Fi", "JD Sports", "Just Cuts", "Kingpin", "Nike", "Officeworks", "Rip Curl", "Roblox", "Subway", "Supré", "The Iconic", "Timezone", "Typo", "Xbox", "ZiNG Pop Culture", "Zone Bowling."],
  "Thanks": ["Adrenaline", "Angus & Coote", "Build-A-Bear Workshop", "COSETTE", "Cotton On", "Edible Blooms", "EveryPlate", "Goldmark", "Hello Fresh", "House", "JB Hi-Fi", "JD Sports", "Just Cuts", "Luxury Escapes", "Menulog", "Michael Hill", "MyHouse", "Prouds", "RedBalloon", "T2", "Temple & Webster", "The Body Shop", "The Iconic", "TripGift", "Webjet."]
}

function findGiftCards(query, cardNames) {
  const matchingGiftCards = [];
  const lowerCaseQuery = query.toLowerCase();
  const cardsToSearch = cardNames && cardNames.length > 0 ? cardNames : Object.keys(giftCardData);
  cardsToSearch.forEach((cardName) => {
    const shopNames = giftCardData[cardName];
    const matchesGiftCard = shopNames.some(shopName => shopName.toLowerCase().includes(lowerCaseQuery));
    if (matchesGiftCard) {
      matchingGiftCards.push(cardName);
    }
  })
  return matchingGiftCards;
}

module.exports = {
  giftCardData,
  findGiftCards,
};