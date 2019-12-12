
function reveal() {
    console.log(this.nom);
}
var backImg="https://picsum.photos/id/77/300/200";


var cards = [
    {
        nom: "1",
        reveal,
        url:"https://picsum.photos/id/1/300/200"
    },
    {
        nom: "1",
        reveal,
        url:"https://picsum.photos/id/1/300/200"
    },
    {
        nom: "2",
        reveal,
        url:"https://picsum.photos/id/2/300/200"
    },
    {
        nom: "2",
        reveal,
        url:"https://picsum.photos/id/2/300/200"
    }
];
shuffle(cards);

for (var card of cards) {
    // card.reveal();

}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}