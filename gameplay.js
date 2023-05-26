
// create a player object and a dealer object
// the cards that are drawn will be in the objs arrays
// add the values of the cards, highest wins, precednece given to dealer
// card counting feature will be a powerup, but first test it so add it in

// draw the card from the deck, once the card has been drawn
// remove it from the deck

function getAceValue()
{
    let aceValues = [1,10,11];
    let aceValue = 0;
    return aceValue;
}

function cardValues(card, player) 
{
    // card[0] gets the first char of the string
    switch (card[0]) {
        case '2':
            player.deckValue += 2;
            break;
        case '3':
            player.deckValue += 3;
            break;
        case '4':
            player.deckValue += 4;
            break;
        case '5':
            player.deckValue += 5;
            break;
        case '6':
            player.deckValue += 6;
            break;
        case '7':
            player.deckValue += 7;
            break;
        case '8':
            player.deckValue += 8;
            break;
        case '9':
            player.deckValue += 9;
            break;
        case '1':
            // 1 indicates 10
            player.deckValue += 10;
            break;
        case 'j':
            player.deckValue += 10;
            break;
        case 'q':
            player.deckValue += 10;
            break;
        case 'k':
            player.deckValue += 10;
            break;
        case 'a':
            // ace can be 1, 10, 11  
            // if an ace in the stack, the player must choose
            // write an alg for the dealer
            getAceValue();
            player.deckValue += 10;
            break;

    }

}

// first number of players
let num_of_players = 2;

// class for player objects

class Player
{
    constructor(playerName) {
        this.playerName = playerName;
        this.playerDeck = [];
        this.deckValue = 0;
        // for counting cards
        this.cardCount = 0;
        // player money
        this.playerMoney = 0;
    }
}

let dealer = new Player("dealer");
let player1 = new Player("player1");
let playersArr = [dealer, player1];

// players not including the dealer
let players = playersArr.slice(1);
let cardDeck = [];


// let cardDeck = [];

let cardsDrawn = [];

let card_names = ['2_of_clubs.png', '10_of_spades.png', 'king_of_diamonds.png', 'king_of_spades.png', 'king_of_clubs.png', 'queen_of_diamonds.png', 'ace_of_hearts.png', '8_of_hearts.png', '6_of_clubs.png', '7_of_hearts.png', 'ace_of_diamonds.png', 'jack_of_spades.png', '6_of_spades.png', '3_of_clubs.png', '2_of_hearts.png', '4_of_hearts.png', '4_of_spades.png', 'queen_of_clubs.png', '4_of_diamonds.png', '9_of_hearts.png', 'jack_of_diamonds.png', '6_of_diamonds.png', '7_of_diamonds.png', '8_of_diamonds.png', 'ace_of_spades.png', 'queen_of_spades.png', 'king_of_hearts.png', '3_of_spades.png', '10_of_clubs.png', '8_of_spades.png', '5_of_diamonds.png', '4_of_clubs.png', '10_of_hearts.png', '2_of_spades.png', '9_of_diamonds.png', '10_of_diamonds.png', '9_of_clubs.png', 'queen_of_hearts.png', '6_of_hearts.png', 'ace_of_clubs.png', '2_of_diamonds.png', 'jack_of_clubs.png', '8_of_clubs.png', '5_of_spades.png', '3_of_diamonds.png', '7_of_clubs.png', '3_of_hearts.png', 'jack_of_hearts.png', '7_of_spades.png', '5_of_hearts.png', '9_of_spades.png', '5_of_clubs.png'];

function shuffleArray(array) {

    for (let i = 51; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// passes in each player obejct
function getCardValue(player) {

    // 2 <= card <= 6 - 1
    // 7 <= card <= 9 - 0
    // 10 <= card <= A - -1

    for(card of player.playerDeck)
    {

        cardValues(card, player); 
        
    }
    console.log(player.playerDeck);
    console.log(player.deckValue);

}

function hit()
{

    // add another player in the future

    let notDrawn = true;

    while(notDrawn)
    {
        index = Math.floor(Math.random() * (52-cardsDrawn.length));

        if(cardsDrawn.includes(cardDeck[index]) == false)
        {
            cardsDrawn.push(cardDeck[index]);
            notDrawn = false;
        }
    
    }

    player1.playerDeck.push(cardDeck[index]);

    // update card deck value for the player
    cardValues(cardDeck[index], player1); 
    
    let cardImagesFolder = "playing-cards/";

    let cardElement = document.createElement("img");
    cardElement.src = cardImagesFolder+cardDeck[index];
    cardElement.className = "card";

    document.getElementById("player-cards-container").appendChild(cardElement);    

    // update display value
    displayDeckValue();

    // check if bust
    gameLogic();


}

function gameLogic()
{

    for(player of players)
    {
        if(player.deckValue > 21)
        {
            document.getElementById("game-outcome").innerHTML = "BUST!";
        }
    }


}

function playerStay()
{
    // player hits the stay button, evaluate the game
}

function clearCards()
{
    const dealerContainer = document.getElementById("dealer-cards-container");
    const playerContainer = document.getElementById("player-cards-container");

    // Get all child image elements
    const dealerChildImages = dealerContainer.getElementsByTagName("img");
    const playerChildImages = playerContainer.getElementsByTagName("img");

    document.getElementById("game-outcome").innerHTML = "";


    // Remove all child image elements
    while (dealerChildImages.length > 0) {
        dealerContainer.removeChild(dealerChildImages[0]);
    }
    while (playerChildImages.length > 0) {
        playerContainer.removeChild(playerChildImages[0]);
    }

}

function mainCardDraw()
{
    let turn = num_of_players*2;
    // put cards that were drawn in this array
    cardsDrawn = [];

    clearCards();

    // reset/start for each card drawn
    player1.playerDeck = [];
    player1.deckValue = 0;
    player1.cardCount = 0;
    dealer.playerDeck = [];
    dealer.deckValue = 0;
    dealer.cardCount = 0;

    // shuffle the array/cards
    cardDeck = shuffleArray(card_names);
    console.log(cardDeck);

    // the initial cards drawn
    for(let i = 0; i < num_of_players*2; i++)
    {
        // get a random num to get for card array
        index = Math.floor(Math.random() * 52);

        // check to see if the card has not been drawn yet
        if(cardsDrawn.includes(cardDeck[index]) == false)
        {
            cardsDrawn.push(cardDeck[index]);
        }
        else {
            i -= 1;
        }

    }

    // every two cards in cards_drawn goes to the players decks
    for(card of cardsDrawn)
    {
        if(turn%2 == 0)
        {
            // card goes to player
            player1.playerDeck.push(card);

        }
        else {
            // card goes to dealer
            dealer.playerDeck.push(card);
        }

        turn -= 1;
    }

    console.log(cardDeck);
    console.log(cardsDrawn);
    console.log(player1.playerDeck);
    console.log(dealer.playerDeck);

    getCardValue(dealer);
    getCardValue(player1);

    for (player of playersArr)
    {
        displayCards(player);
    }

    // if ace is drawn ask each time what the value of ace will be


}    

function displayCards(player)
{


    for(card of player.playerDeck)
    {

        let cardImagesFolder = "playing-cards/";

        let cardElement = document.createElement("img");
        cardElement.src = cardImagesFolder+card;
        cardElement.className = "card";

        if(player.playerName == "dealer")
        {
            document.getElementById("dealer-cards-container").appendChild(cardElement);
        }
        else {
            document.getElementById("player-cards-container").appendChild(cardElement);

        }
    

    }

    displayDeckValue();
    
}

function displayDeckValue()
{
    
    document.getElementById("dealer-value").innerHTML = dealer.deckValue;

    for(player of players)
    {
        document.getElementById("player-value").innerHTML = player1.deckValue;
    }
    
}