
function reveal() {
    console.log(this.id);
    return this.url;
}
var backImg="https://picsum.photos/id/77/300/200";

var cardsArray = [
    {
        id:1,
        reveal,
        url:"https://picsum.photos/id/1/300/200"
    },
    {
        id:1,
        reveal,
        url:"https://picsum.photos/id/1/300/200"
    },
    {
        id:2,
        reveal,
        url:"https://picsum.photos/id/2/300/200"
    },
    {
        id:2,
        reveal,
        url:"https://picsum.photos/id/2/300/200"
    },
    {
        id:3,
        reveal,
        url:"https://picsum.photos/id/3/300/200"
    },
    {
        id:3,
        reveal,
        url:"https://picsum.photos/id/3/300/200"
    },
    {
        id:4,
        reveal,
        url:"https://picsum.photos/id/4/300/200"
    },
    {
        id:4,
        reveal,
        url:"https://picsum.photos/id/4/300/200"
    }
];
shuffle(cardsArray);

var cardsDiv;
var container=document.getElementById("container");
var img;
for (const i in cardsArray) {
    cardsDiv=document.createElement("div");
    img=document.createElement("img");
    cardsDiv.className="cards";
    container.appendChild(cardsDiv);
    cardsDiv.appendChild(img);
    img.src=backImg;
    img.onclick=function(){
        // cardsArray[i].reveal();
        this.src=cardsArray[i].reveal();
    };

}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}