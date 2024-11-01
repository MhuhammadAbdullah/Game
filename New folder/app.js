// var forward = 0;
// function abc() {
//     // console.log(event.key);
//     console.log(event.keyCode);

//     var character = document.getElementById("character");
//     if (event.keyCode === 65) {
//         forward = forward + 10;
//         character.style.left = forward + "px"
//     }
//     if (event.keyCode === 66) {
//         forward = forward - 10;
//         character.style.left = forward + "px"
//     }
//     if (event.keyCode === 67) {
//         character.style.width = "160px"
//         character.style.height = "250px"
//         character.src = "assets/spidey-scratchin.gif"

//     }
//     if (event.keyCode === 68) {
//         character.style.width = "250px"
//         character.style.height = "250px"
//         character.src = "assets/spidey-walk1.gif"

//     }
// }

// window.onkeydown = abc;

var forward1 = 0;
var forward2 = 100; // Initial position for the second character

function abc() {
    var character1 = document.getElementById("character1");
    var character2 = document.getElementById("character2");

    if (event.keyCode === 65) { // Key 'A' for character 1
        forward1 += 10;
        character1.style.left = forward1 + "px";
    }
    if (event.keyCode === 66) { // Key 'B' for character 1
        forward1 -= 10;
        character1.style.left = forward1 + "px";
    }
    if (event.keyCode === 67) { // Key 'C' for character 1
        character1.style.width = "160px";
        character1.style.height = "250px";
        character1.src = "assets/spidey-scratchin.gif";
    }
    if (event.keyCode === 68) { // Key 'D' for character 1
        character1.style.width = "250px";
        character1.style.height = "250px";
        character1.src = "assets/spidey-walk1.gif";
    }

    // Add controls for the second character
    if (event.keyCode === 74) { // Key 'J' for character 2 (move right)
        forward2 += 10;
        character2.style.left = forward2 + "px";
    }
    if (event.keyCode === 75) { // Key 'K' for character 2 (move left)
        forward2 -= 10;
        character2.style.left = forward2 + "px";
    }
    if (event.keyCode === 76) { // Key 'L' for character 2 (reset)
        character2.style.width = "500px";
        character2.style.height = "600px";
        character2.src = "assets/hulk-winpose21.gif";
    }
    if (event.keyCode === 77) { // Key 'M' for character 2 (enlarge)
        character2.style.width = "250px";
        character2.style.height = "250px";
        character2.src = "assets/hulk-walk.gif";
    }
}

window.onkeydown = abc;
