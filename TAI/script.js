const stories = [
   "Du wachst in einem unbekannten Raum auf",
   "Du siehst einen Schlüssel auf dem Boden.",
   "Du findest eine verschlossene Tür."
]

const questions = [
   "Siehst du dich um? (ja/nein)",
   "Nimmst du den Schlüssel auf? (ja/nein)",
   "Versuchst du, die Tür zu öffnen? (ja/nein)"
]


for (let i = 0; i < stories.length; i++) {
   action(stories[i], questions[i])
}

function action(story, question) {
   console.log(story);
   let userChoice = prompt(question)
   // if (userChoice.toLowerCase() == "Ja") {
   //    action()
   // }
}

// function startStory() {
//    console.log("Du wachst in einem unbekannten Raum auf.");
//    let userChoice = prompt("Siehst du dich um? (ja/nein)");
//    if (userChoice.toLowerCase() === "ja") {
//       findKey();
//    } else {
//       endStory();
//    }
// }

// // Funktion, wenn der Benutzer den Schlüssel findet
// function findKey() {
//    console.log("Du siehst einen Schlüssel auf dem Boden.");
//    let userChoice = prompt("Nimmst du den Schlüssel auf? (ja/nein)");
//    if (userChoice.toLowerCase() === "ja") {
//       openDoor();
//    } else {
//       endStory();
//    }
// }

// // Funktion, wenn der Benutzer die Tür erreicht
// function openDoor() {
//    console.log("Du findest eine verschlossene Tür.");
//    let userChoice = prompt("Versuchst du, die Tür zu öffnen? (ja/nein)");
//    if (userChoice.toLowerCase() === "ja") {
//       escapeRoom();
//    } else {
//       endStory();
//    }
// }

// Funktion für das Ende der Geschichte

// Beginn der Geschichte
// startStory();
