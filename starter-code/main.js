
var cards = ["queen", "queen", "king", "king"];
var cardsInplay = []


var board = getElementById("game-board");


//create function createboard
var createBoard = function() {
  for (var i=0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.setAttribute('data-card', cards[i]);
      cardElement.addEventListener('click', isTwoCards);
      board.appendChild(cardElement);
  }

}

 var isTwoCards = function() {
  cardsInPlay.push(this.getAttribute('data-card'));
//show card image
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
      this.innerHTML = '<img src="playing-card-161492_640.png"/>'; // king
  } else {
    this.innerHTML = '<img src="playing-card-161494_640.png"/>'; //queen
  }
  //2 cards in play, check match
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInplay = [];
  }
}

var isMatch = function(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match");
  }
   else {
    alert("Sorry, try again.");
  }
}


createboard();

