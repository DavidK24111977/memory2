var backImg = "https://picsum.photos/id/77/300/200";

var cardsArray = [
    {
        id: 1,
        carte: 1,
        url: "https://picsum.photos/id/10/300/200"
    },
    {
        id: 1,
        carte: 2,
        url: "https://picsum.photos/id/10/300/200"
    },
    {
        id: 2,
        carte: 3,
        url: "https://picsum.photos/id/20/300/200"
    },
    {
        id: 2,
        carte: 4,
        url: "https://picsum.photos/id/20/300/200"
    },
    {
        id: 3,
        carte: 5,
        url: "https://picsum.photos/id/30/300/200"
    },
    {
        id: 3,
        carte: 6,
        url: "https://picsum.photos/id/30/300/200"
    },
    {
        id: 4,
        carte: 7,
        url: "https://picsum.photos/id/50/300/200"
    },
    {
        id: 4,
        carte: 8,
        url: "https://picsum.photos/id/50/300/200"
    }
];
var winArray = [];
var cache = document.getElementById("cache");
var essaiId = document.getElementById("essai");
var imgCache;
setCache();
shuffle(cardsArray);

var cardsDiv;
var container = document.getElementById("game");

var img;
var count = 1;
var previous;
var previousClick;
var essai = 4;
var couldPlay = true;
essaiId.innerHTML = essai + " essais restant";
var messageId = document.getElementById("message");
var replayBtn = document.getElementById("replay");
play();

function play() {
    for (const i in cardsArray) {
        cardsDiv = document.createElement("div");
        img = document.createElement("img");
        cardsDiv.className = "cards";
        container.appendChild(cardsDiv);
        cardsDiv.appendChild(img);
        img.src = backImg;
        img.onclick = function () {
            if (couldPlay) {
                if (winArray.indexOf(cardsArray[i].id) < 0) {
                    if (count === 1) {
                        this.src = cardsArray[i].url;
                        previous = cardsArray[i];
                        previousClick = this;
                        count++;
                    } else {
                        if (previous.carte !== cardsArray[i].carte) {
                            count = 1;
                            this.src = cardsArray[i].url;
                            if (previous.id === cardsArray[i].id) {
                                winArray.push(cardsArray[i].id);
                                if ((cardsArray.length) / 2 === winArray.length) {
                                    setMessage("Bravo, vous avez gagné", true);
                                    replayBtn.style.display = "block";
                                    couldPlay = false;
                                }
                            } else {
                                essai--;
                                essaiId.innerHTML = essai + " essais restant";
                                setTimeout(backToBack, 1000, previousClick);
                                setTimeout(backToBack, 1000, this);
                                if (essai === 0) {
                                    setMessage("Tu n'as pas réussi à trouver toutes les cartes dans le nombre d'essais imparti", true);
                                    replayBtn.style.display = "block";
                                    couldPlay = false;
                                }
                            }
                        } else {
                            setMessage("Pas la même carte, biesse va!", false);
                        }
                    }
                } else {
                    setMessage("Tu as déjà trouvé la paire de cette image", false);

                }
            }
        };
    }
}

replayBtn.onclick = replay;

function backToBack(card) {
    card.src = backImg;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function setMessage(message, permanentMessage) {
    messageId.innerHTML = message;
    messageId.classList.remove("hide");
    messageId.classList.add("show");
    if (!permanentMessage) {
        setTimeout(hide, 2000);
    }
}

function hide() {
    messageId.classList.remove("show");
    messageId.classList.add("hide");
}

function setCache() {
    for (var i = 0; i < cardsArray.length; i++) {
        imgCache = document.createElement('img');
        cache.appendChild(imgCache);
        imgCache.src = cardsArray[i].url;
    }
}

function replay() {
    container.innerHTML="";
    winArray = [];
    setCache();
    shuffle(cardsArray);
    count = 1;
    essai = 4;
    couldPlay = true;
    essaiId.innerHTML = essai + " essais restant";
    play();
}
