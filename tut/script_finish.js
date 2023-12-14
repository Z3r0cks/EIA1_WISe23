const stories1 = [
   "Du hast links gewählt, wähle A oder B",
   "Du hast rechts gewählt, wähle 1 oder 2",
   "Falsche Eingabe, wähle links oder rechts"
]

const stories2 = [
   "Du hast A gewählt, wähle Hund oder Hase",
   "Du hast B gewählt, wähle Kuh oder Pferd",
   "Falsche Eingabe, wähle A oder B"
]

const stories3 = [
   "Du hast 1 gewählt, wähle Haus oder Auto",
   "Du hast 2 gewählt, wähle Baum oder Kind",
   "Falsche Eingabe, wähle 1 oder 2"
]

let state = 0;

const input = document.querySelector(".intputForm__field");
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {
   if (event.key == "Enter") {
      if (state == 0) {
         story1()
      } else if (state == 1) {
         story2()
      } else if (state == 2) {
         story3()
      }
   }
})

function story1() {
   if (input.value == "links") {
      output.innerText = stories1[0]
      state++
   } else if (input.value == "rechts") {
      output.innerText = stories1[1]
      state += 2
   } else
      output.innerText = stories1[2]
   input.value = "";
}

function story2() {
   input.value = "";
   if (input.value == "A") {
      output.innerText = stories2[0]
      state++
   }
   else if (input.value == "B") {
      output.innerText = stories2[1]
      state++
   }
   else
      output.innerText = stories2[2]
}

function story3() {
   input.value = "";
   if (input.value == "1") {
      output.innerText = stories3[0]
      state++
   }
   else if (input.value == "2") {
      output.innerText = stories3[1]
      state++
   }
   else
      output.innerText = stories3[2]
}

// input.addEventListener("keydown", function (event) {
//    if (event.key == "Enter") {
//       if (state == 0) {
//          story(stories1, "links", "rechts")
//       } else if (state == 1) {
//          story(stories2, "A", "B")
//       } else if (state == 2) {
//          story(stories3, "1", "2")
//       }
//    }
// })

// function story(stories, inputA, inputB) {
//    console.log(state);
//    if (input.value == inputA) {
//       output.innerText = stories[0]
//       state++
//    }
//    else if (input.value == inputB) {
//       output.innerText = stories[1]
//       state += 2
//    }
//    else
//       output.innerText = stories[2]
//    input.value = "";
// }
