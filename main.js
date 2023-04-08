const deckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6";
const hitButton = document.querySelector(".hit");
const dealButton = document.querySelector(".deal");
cardsContainer1 = document.querySelector(".my-cards");
cardsContainer2 = document.querySelector(".dealer-cards");
let cardimage = document.createElement("img");
let cardimage2 = document.createElement("img");
let cardimage3 = document.createElement("img");
let cardimage4 = document.createElement("img");
cardsContainer1.append(cardimage);
cardsContainer1.append(cardimage2);
cardsContainer2.append(cardimage3);
cardsContainer2.append(cardimage4);
//code below:to get id of 6 deck count deck------------------------------------------------
// let deckId;

// async function getDeck() {
//   const response = await fetch(deckUrl);
//   const deckDetails = await response.json();
//   deckId = deckDetails.deck_id;

//   getDeck();
// }

fetch(deckUrl)
  .then((response) => response.json())
  .then((deckId) => {
    const dealer = deckId.deck_id;
    console.log(dealer);
  });
// .catch(displayError);

//----------------------------------------------------------------
//code below: to click click deal button and get 4 card deal, 2 to my hand and 2 to dealers hand
dealButton.addEventListener("click", function (e) {
  e.preventDefault();

  let cardUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=4";

  fetch(cardUrl)
    .then((response) => response.json())
    .then((card) => {
      const cards = card.cards;
      console.log(cards);
      cardimage.setAttribute("src", cards[0].image);
      cardimage2.setAttribute("src", cards[1].image);
      cardimage3.setAttribute("src", cards[2].image);
      cardimage4.setAttribute("src", cards[3].image);
    });
  // .catch(displayError);
});

// const cardUrl2 = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
// const response2 = await fetch(cardUrl2);
// const card2 = await response2.json();

// card2.cards.forEach((element) => {
//   cardimage2.setAttribute("src", element.image);
// });
// };

// hitButton.addEventListener("click", (e) => {
//   e.preventDefault();

//   fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
//     .then((response) => response.json())
//     .then((deck) => (shuffle = deck.deck_id))
//     .catch(displayError);

//   drawCard =
//     "https://deckofcardsapi.com/api/deck/draw/?count=2";

//   fetch(drawCard)
//     .then((response) => response.json())
//     .then((card) => console.log(card))
//     .catch(displayError);
// });

// const section = document.createElement("section");
// section.classList.add("message");
// const paragraph = document.createElement("p");
// paragraph.innerHTML = "You've gone bust!";
// section.append(paragraph);

// const tryButton = document.createElement("button");
// tryButton.classList.add("message");
// tryButton.innerHTML = "Try Again";

// const h2 = document.createElement("h2");

// function displayError(error) {
//   const section = document.querySelector("section.error");
//   section.style.display = "block";

//   const paragraph = document.createElement("p");
//   paragraph.textContent = "Something went wrong!";

//   const errorMessage = document.createElement("p");
//   errorMessage.classList.add("error-message");
//   errorMessage.textContent = error;

//   section.append(paragraph, errorMessage);
// }
