// Variables, if/else, functions, objects

// Start: Left (Room 1)/Right (Room 2)
// Room 1: Run (Finish) // Fight (dead) //monster
// Room 2: Left (Finish)/Right (dead) //trap
// Finish: (Finish)

const storyStart = "You are in a dark room. There are two doors. Which door do you take? Left or Right?";
const storyRoom1 = "You are in a room with a monster. What do you do? Fight or Run?";
const storyRomm1Fight = "You are fighting the monster. You are dead. Game over.";
const StoryRoom1Run = "You are runing trough the door in front of you. The monster behind you doesn't follow you. You found a treasure chest. You open it and find a lot of gold. You are rich. You win.";
const WrongInput = "Wrong input. Game over.";

const storyRoom2 = "You are in a room with a trap which is narrowing. In front of you are two doors. Which door do you take? Left or Right?";
const StoryRoom2Left = "You can dodge the trap and you are in a room with a treasure chest. You open it and find a lot of gold. You are rich. You win.";
const StoryRoom2Right = "You can't open the door and have no time to dodge the trap. You are dead. Game over";

const rooms = [
   [storyRoom1, "fight"],
   [storyRoom2, "trap"],
   [finish, "finish"]
]

characterStats = {
   Strengh: 5,
   run: 5,
}

const enemyStrengh = 5;
const trapSpeed = 5;

const start = prompt(storyStart);

if (start == "Left" || start == "left") {
   const action = enterRoom(rooms[0][0], rooms[0][1]);
   if (action == "Fight" || action == "fight") {
      alert(storyRomm1Fight);
   } else if (action == "Run" || action == "run") {
      alert(StoryRoom1Run);
   }


   function action(characterStat, opponentStat) {
      if (characterStat >= opponentStat) {
         return true;
      } else {
         return false;
      }
   }

   function enterRoom(story, action) {
      const action = prompt(story);
      if (action)
         if (action == input) {
            alert(exit);
         }
   }
}


// if (start == "Right" || start == "right") {
//    const action = prompt(storyRoom2);
//    if (action == "Left" || action == "left") {
//       alert(StoryRoom2Left);
//    } else if (action == "Right" || action == "right") {
//       alert(StoryRoom2Right);
//    }
// }

// if (start != "Left" && start != "left" && start != "Right" && start != "right") {
//    alert(WrongInput);
// }