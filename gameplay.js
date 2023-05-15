
// create a player object and a dealer object
// the cards that are drawn will be in the objs arrays
// add the values of the cards, highest wins, precednece given to dealer
// card counting feature will be a powerup, but first test it so add it in

// draw the card from the deck, once the card has been drawn
// remove it from the deck

let   card_names = ['2_of_clubs.png', '10_of_spades.png', 'king_of_diamonds.png', 'king_of_spades.png', 'king_of_clubs.png', 'queen_of_diamonds.png', 'ace_of_hearts.png', '8_of_hearts.png', '6_of_clubs.png', '7_of_hearts.png', 'ace_of_diamonds.png', 'jack_of_spades.png', '6_of_spades.png', '3_of_clubs.png', '2_of_hearts.png', '4_of_hearts.png', '4_of_spades.png', 'queen_of_clubs.png', '4_of_diamonds.png', '9_of_hearts.png', 'jack_of_diamonds.png', '6_of_diamonds.png', '7_of_diamonds.png', '8_of_diamonds.png', 'ace_of_spades.png', 'queen_of_spades.png', 'king_of_hearts.png', '3_of_spades.png', '10_of_clubs.png', '8_of_spades.png', '5_of_diamonds.png', '4_of_clubs.png', '10_of_hearts.png', '2_of_spades.png', '9_of_diamonds.png', '10_of_diamonds.png', '9_of_clubs.png', 'queen_of_hearts.png', '6_of_hearts.png', 'ace_of_clubs.png', '2_of_diamonds.png', 'jack_of_clubs.png', '8_of_clubs.png', '5_of_spades.png', '3_of_diamonds.png', '7_of_clubs.png', '3_of_hearts.png', 'jack_of_hearts.png', '7_of_spades.png', '5_of_hearts.png', '9_of_spades.png', '5_of_clubs.png'];


function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getCardValue(card) {

    switch (card) {

        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 1:
            // 1 indicates 10
            break;
        case 'j':
            break;
        case 'q':
            break;
        case 'k':
            break;
        case 'a':
            // ace can be 1, 10, 11  
            break;

    }


}

function drawCard()
{

    // put cards that were drawn in this array
    // in the future cards will be in player obj's deck
    let cards_drawn = [];
    console.log(card_names);

    // shuffle the array/cards
    numbersArray = shuffleArray(card_names);

    console.log(card_names);


    for(let i = 0; i < 4; i++)
    {
        index = Math.floor(Math.random() * 52);

        console.log(card_names[index]);

        getCardValue(card_names[index][0]);

    }

    

}    