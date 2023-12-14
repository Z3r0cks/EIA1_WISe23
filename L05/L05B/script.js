// // Variables, if/else

// // Start: Left (Room 1)/Right (Room 2)
// // Room 1: Run (Finish) // Fight (dead) //monster
// // Room 2: Left (Finish)/Right (dead) //trap
// // Finish: (Finish)

// const stories = [
//    "You are in a dark room. There are two doors. Which door do you take? Left or Right?",
//    "You are in a room with a monster. What do you do? Fight or Run?",
//    "You are fighting the monster. You are dead. Game over.",
//    "You are runing trough the door in front of you. The monster behind you doesn't follow you. You found a treasure chest. You open it and find a lot of gold. You are rich. You win.",
//    "You are in a room with a trap which is narrowing. In front of you are two doors. Which door do you take? Left or Right?",
//    "You can dodge the trap and you are in a room with a treasure chest. You open it and find a lot of gold. You are rich. You win.",
//    "You can't open the door and have no time to dodge the trap. You are dead. Game over",
//    "Wrong input. Game over."
// ]

// const start = prompt(stories[0]);

// if (start.toLowerCase() == "left") {
//    const action = room(stories[1]);
//    if (action.toLowerCase() == "fight") {
//       alert(stories[2]);
//    } else if (action.toLowerCase() == "run") {
//       alert(stories[3]);
//    }
// }

// if (start.toLowerCase() == "right") {
//    const action = room(stories[4]);
//    if (action.toLowerCase() == "left") {
//       alert(stories[5]);
//    } else if (action.toLowerCase() == "right") {
//       alert(stories[6]);
//    }
// }

// if (start.toLowerCase() == "left" && start.toLowerCase() == "right") {
//    alert(stories[7]);
// }

// function room(story) {
//    return prompt(story);
// }

let myArray = ["test1", 3, true, "text"]

console.log(myArray[3]);



function helloWorld(nummer1, nummer2) {
   const result = nummer1 + nummer2
   return result;
}

const sum = helloWorld(10, 25)



const storyStart = "You are in a dark room. There are two doors. Which door do you take? Left or Right?";
const storyRoom1 = "You are in a room with a monster. What do you do? Fight or Run?";
const storyRomm1Fight = "You are fighting the monster. You are dead. Game over.";
const StoryRoom1Run = "You are runing trough the door in front of you. The monster behind you doesn't follow you. You found a treasure chest. You open it and find a lot of gold. You are rich. You win.";
const WrongInput = "Wrong input. Game over.";

const storyRoom2 = "You are in a room with a trap which is narrowing. In front of you are two doors. Which door do you take? Left or Right?";
const StoryRoom2Left = "You can dodge the trap and you are in a room with a treasure chest. You open it and find a lot of gold. You are rich. You win.";
const StoryRoom2Right = "You can't open the door and have no time to dodge the trap. You are dead. Game over";

const start = prompt(storyStart);
if (start == "Left" || start == "left") {
   const action = prompt(storyRoom1);
   if (action == "Fight" || action == "fight") {
      alert(storyRomm1Fight);
   } else if (action == "Run" || action == "run") {
      alert(StoryRoom1Run);
   }
}

if (start == "Right" || start == "right") {
   const action = prompt(storyRoom2);
   if (action == "Left" || action == "left") {
      alert(StoryRoom2Left);
   } else if (action == "Right" || action == "right") {
      alert(StoryRoom2Right);
   }
}

if (start != "Left" && start != "left" && start != "Right" && start != "right") {
   alert(WrongInput);
}
