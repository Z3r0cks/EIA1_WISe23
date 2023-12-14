// Spielvariablen
var aktuellerRaum = 0; // Start bei Raum 0
var spielLäuft = true;

// Raum-Beschreibungen
var raumBeschreibungen = [
    "Du bist in einem dunklen Raum. Es gibt Wege nach Norden und Süden.",
    "Du bist in einer Küche. Es riecht nach Kuchen. Der einzige Weg führt nach Süden.",
    "Du bist in einem Wohnzimmer. Es gibt eine Couch und einen Fernseher. Der einzige Weg führt nach Norden."
];

// Raum-Verbindungen als Arrays [norden, süden] 
// -1 bedeutet keine Verbindung
var raumVerbindungen = [
    [1, 2], // Verbindungen für Raum 0
    [-1, 0], // Verbindungen für Raum 1
    [0, -1]  // Verbindungen für Raum 2
];

// Funktionen
function raumBeschreibung(raumIndex) {
    console.log(raumBeschreibungen[raumIndex]);
}

function wechsleRaum(richtung) {
    var richtungsIndex = richtung === "norden" ? 0 : 1;
    var zielRaum = raumVerbindungen[aktuellerRaum][richtungsIndex];
    if (zielRaum !== -1) {
        aktuellerRaum = zielRaum;
        raumBeschreibung(aktuellerRaum);
    } else {
        console.log("Du kannst nicht in diese Richtung gehen.");
    }
}

function verarbeiteEingabe(eingabe) {
    eingabe = eingabe.toLowerCase();
    if (eingabe === "norden" || eingabe === "süden") {
        wechsleRaum(eingabe);
    } else {
        console.log("Das verstehe ich nicht.");
    }
}

// Spiel-Loop
while (spielLäuft) {
    raumBeschreibung(aktuellerRaum);
    var aktion = prompt("Was willst du tun?");
    if (aktion === null) {
        spielLäuft = false; // Beendet das Spiel, wenn der Nutzer abbricht
    } else {
        verarbeiteEingabe(aktion);
    }
}
