stories = [
   "habe links geklickt",
   "rechts geklickt",
   "falsch geklickt"
]

let state = 1;

const input = document.querySelector(".intputForm__field")
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {
   if (event.key == "Enter") {
      if (input.value == "links") {
         output.innerHTML = stories[0]
      } else if (input.value == "rechts") {
         output.innerHTML = stories[1]
      }
   }
})