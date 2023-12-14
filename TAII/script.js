// Array mit möglichen Aktionen
let actions = ["Erkunden", "Rasten", "Handeln"];

// Funktion zur Anzeige von Aktionen
function showActions() {
   for (let i = 0; i < actions.length; i++) {
      console.log(i + 1 + ". " + actions[i]);
   }
}

// Aufrufen der Funktion, um Aktionen anzuzeigen
showActions();

// Benutzer nach einer Aktion fragen
let userChoice = prompt("Wähle eine Aktion (gib die Nummer ein von der Konsole)");

function choices(userChoice) {
   if (userChoice == 1) {
      console.log("Du hast Erkunden gewählt.");
      explore();
   } else if (userChoice == 2) {
      console.log("Du hast Rasten gewählt.");
      rest();
   } else {
      console.log("Du hast Handeln gewählt.");
      trade();
   }
}

// Definieren von Funktionen für jede Aktion
function explore() {
   console.log("Du erkundest die Umgebung... bla bla bla ...");
   // Fügen Sie hier Code hinzu, um die Erkundungsaktion zu simulieren
}

function rest() {
   console.log("Du rastest und regenerierst deine Kräfte...");
   // Fügen Sie hier Code hinzu, um die Rastaktion zu simulieren
}

function trade() {
   console.log("Du handelst mit einem Händler...");
   // Fügen Sie hier Code hinzu, um die Handelsaktion zu simulieren
}
