/*// Le nombre max
const MAX_NUMBER = 100; 

// Le nombre cherché
const searchedNumber = Math.round(Math.random() * MAX_NUMBER);

// Le nombre saisi
let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

// Le nombre d'essais
let attempts = 1;

// Tant que le nombre saisi n'est pas bon on redemande un nombre
while (enteredNumber !== searchedNumber) {
    // on vérifie que l'utilisateur a répondu, sinon on sort de la boucle
    if(!enteredNumber){
        break;
    }
    // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
    if (enteredNumber < searchedNumber) {
        enteredNumber = parseInt(prompt('C\'est plus'));
    }
    else {
        enteredNumber = parseInt(prompt('C\'est moins'));
    }
    // on incrémente le nombre d'essais
    attempts += 1;
}

// on est sorti de la boucle, c'est soit que le nombre saisi est bien le nombre cherché
// soit que le joueur n'a pas répondu et que enteredNumber est 'falsy'
if(enteredNumber){
    // on affiche un message de victoire
    alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attempts);
} else {
    // on affiche un message d'abandon
    alert('Vous abandonnez ? Dommage...');
}*/


function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arrayAttemps = [];

function play() {
    let entier = entierAleatoire(1, 100);
    console.log(entier)
    let attempts = 1;
    let parti = 0;
    let tableauFull = "";
    let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));
    while (enteredNumber !== entier) {
        if (!enteredNumber) {
            break;
        }
        if (enteredNumber < entier) {
            enteredNumber = parseInt(prompt('C\'est plus'));
        }
        else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        }
        attempts += 1;
    }
    let game = {
        nbSearch: entier,
        nbEssaie: attempts,
    };
    if (enteredNumber) {

        alert('Bravo ! C\'était bien ' + game.nbSearch + ' - Nombre d\'essais : ' + game.nbEssaie);
    } else {
        // on affiche un message d'abandon
        alert('Vous abandonnez ? Dommage...');
    }
    arrayAttemps.push(game.nbEssaie);

    if (window.confirm("tu veux rejouer ?")) {
        play()

    }
    else {
        for (i = 0; i < arrayAttemps.length; i++) {




            parti++
            tableauFull += " ton score est de : " + arrayAttemps[i] + " essaie, pour la partie " + parti + "\n";
            //alert(" ton score est de : " + arrayAttemps[i] + " essaie, pour la partie " + parti);
        }

    }

 return tableauFull;

}

play()
let score = play();
alert(score);