let mainDiv = document.getElementById("main")

let clickCounter = 0;
let statsDiv = document.createElement("div")
statsDiv.id = "statDiv"
let counterText = document.createElement("p")
counterText.id = "counterText"
let virusHealth = 100000;
let bigWinText = document.createElement("p")
bigWinText.innerText = "Vous avez vaincu le VIH ! Félicitations ! Maintenant, vous pouvez aller faire la meme chose dans la vrai vie !"
bigWinText.style.display = "none"
bigWinText.id = "bigWinText"
mainDiv.appendChild(bigWinText)
counterText.innerText = "Cliques: " + clickCounter
statsDiv.appendChild(counterText)
mainDiv.appendChild(statsDiv)
let buttonText = {
    //PowerUpX: [donCounter,milliseconds ,UnlockPrice]
    "PowerUp1": [50,1000,50],
    "PowerUp2": [100,1000,500],
    "PowerUp3": [500,1000,1000],
    "PowerUp4": [1000,1000,5000],
    "PowerUp5": [5000,1000,10000],
    "PowerUp6": [10000,1000,50000],
    "PowerUp7": [50000,1000,100000],
    "PowerUp8": [100000,1000,500000],
    "PowerUp9": [500000,1000,1000000],
    "PowerUp10": [1000000,1000,5000000],
    "PowerUp11": [5000000,1000,10000000],
    "PowerUp12": [10000000,1000,50000000],
    "PowerUp13": [50000000,1000,100000000],

}

let powerUpDiv = document.createElement("div")
powerUpDiv.id = "powerUpDiv"
for (let i = 1; i <= Object.keys(buttonText).length; i++) {
    let powerUpButton = document.createElement("button")
    powerUpButton.innerText = "PowerUp" + i + " - " + buttonText["PowerUp" + i]
    powerUpButton.disabled = true
    powerUpButton.addEventListener("click", function () {
        clickCounter -= buttonText["PowerUp" + i][2]

        powerLoop(buttonText["PowerUp" + i])
    })
    powerUpDiv.appendChild(powerUpButton)
}
mainDiv.appendChild(powerUpDiv)

let seuilInfo = {
    "seul1": [10,"24% des découvertes de séropositivité ont eu lieu à un stade précoce."],
    "seul2": [100,"5013 personnes ont découvert leur séropositivité au VIH en France en 2021."],
    "seul3": [1000,"En métropole, le taux est plus élevé en Ile-de-France que dans les autres régions."],
    "seul4": [10000,"Parmi les personnes ayant découvert leur séropositivité, 43 % sont des hommes ayant des rapports sexuels avec des hommes (HSH), 38 % des hétérosexuel.le.s né.e.s à l’étranger, 16 % des hétérosexuel.le.s né.e.s en France."],
    "seul5": [100000,"La diminution du nombre de découvertes de séropositivité est plus marquée chez les personnes nées à l’étranger (-28 %) à cause de la difficulté d’accéder au dépistage et en raison de la baisse des flux migratoires."],
    "seul6": [1000000,"Les hommes représentent 69% des découvertes de séropositivité VIH en 2020, les femmes 30% et les personnes trans 1%."],
    "seul7": [10000000,"Une bonne santé sexuelle passe notamment par un dépistage régulier."],
    "seul8": [100000000,"Le sida (Syndrome d’Immuno Déficience Acquise) est dû au VIH (Virus de l’Immunodéficience Humaine)."],
    "seul9": [1000000000,"37, 9 millions de personnes vivaient avec le VIH en 2018."],
    "seul10": [10000000000,"770 000 personnes sont décédées de maladies liées au sida en 2018."],
    "seul11": [100000000000,"Le sida peut se transmettre par les rapports sexuels non protégés avec pénétration vaginale, anale (ou buccale)."],
    "seul12": [100000000000,"Le sia peut se transmettre par une exposition au sang, dans des circonstances très précises."],
    "seul13": [100000000000,"Le sida peut se transmettre de la mère à l’enfant pendant la grossesse ou l’allaitement."],
    "seul14": [100000000000,"Le préservatif masculin est une membrane en latex, polyuréthane ou polyisoprène. Il protège de l’infection par le VIH et par d’autres infections sexuellement transmissibles (IST)."],
    "seul15": [100000000000,"Le préservatif féminin présente l’avantage de pouvoir être mis en place plusieurs heures avant le rapport sexuel. Il est à usage unique."],
    "seul16": [100000000000,"On est séropositif-ve au VIH quand on a été infecté par ce virus."],
    "seul17": [100000000000,"Le seul moyen de savoir si on est porteur du VIH est de faire un test de dépistage."],
    "seul18": [100000000000,"Il n’existe pas de traitement qui guérisse du VIH/sida."],
    "seul19": [100000000000,"Les traitements actuels freinent l’évolution de la maladie et améliorent les conditions de vie des malades."]

}

let infoDiv = document.createElement("div")
infoDiv.id = "infoDiv"
for (let i = 0; i <= Object.keys(seuilInfo).length; i++) {

    let infoP = document.createElement("p")
    if (i==0){
        infoP.innerText = "Le saviez-vous ?"
        infoP.style.display = "block"

    }else{
    infoP.innerText = seuilInfo["seul" + i][1]
    infoP.style.display = "none"

    }
    infoDiv.appendChild(infoP)
}
mainDiv.appendChild(infoDiv)
async function powerLoop(loop){
     setInterval(function(){
            updateClicker(loop[0])
        }, loop[1])

}
function updateClicker(nb){
    if (virusHealth < 0) {
        document.getElementById("bigWinText").style.display = "block"
        document.getElementById("powerUpDiv").style.display = "none"
        document.getElementById("infoDiv").style.display = "none"
        document.getElementById("statDiv").style.display = "none"
        document.getElementById("hiv").style.display = "none"


    }
    clickCounter += nb
    virusHealth -= 15;

    counterText.innerText = "Cliques: " + clickCounter
    for (let i = 1; i <= Object.keys(buttonText).length; i++) {
        if (clickCounter >= buttonText["PowerUp" + i][2]) {
            powerUpDiv.children[i-1].disabled = false
        }


    }
    for (let i = 1; i <= Object.keys(seuilInfo).length; i++) {
        if (clickCounter >= seuilInfo["seul" + i][0]) {
            infoDiv.children[i].style.display = "block";
        }
    }
    document.getElementById("hiv").style.scale =virusHealth*0.00001
    console.log(document.getElementById("hiv").style.scale)

}
const img = document.createElement("img");
img.src = "hiv.png";
img.id = "hiv";

img.classList.add("animate__animate");
img.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    imgClicked()
})
img.addEventListener("click", function () {
    imgClicked();
})
function imgClicked (){
    document.getElementById("hiv").style.animation = "myPulse 50ms";
    setTimeout(function () {
        document.getElementById("hiv").style.animation = "";

    },50)
    let lastPowerUp = 1;
    for (let i = 1; i <= Object.keys(buttonText).length; i++) {
        if (clickCounter >= buttonText["PowerUp" + i][2]) {
            if (buttonText["PowerUp" + i][2]/10 > lastPowerUp) {
                lastPowerUp = buttonText["PowerUp" + i][2]/10;
            }
        }
    }

    updateClicker(lastPowerUp);
}
img.draggable = false;
mainDiv.appendChild(img);
setInterval(function () {
    virusHealth+=5
},5000)


setInterval(function () {
    document.getElementById("hiv").style.animation = "rotate 2s infinite";
    setTimeout(function () {
        document.getElementById("hiv").style.animation = "";

    },50)
},Math.random()*10000)

