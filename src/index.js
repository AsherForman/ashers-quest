
let bird = new Bird()
let rink = new Icerink() 
let character = new Character()

// playerElement.src = `assets/character/static.gif`

// This is where the collision is with my bird and my boyo
function collision(){
    var man = {x: parseInt(character.element.style.left), y: parseInt(character.element.style.top), width: 55, height: 77}
    var birdDimensions = {x: parseInt(bird.element.style.left), y: parseInt(bird.element.style.top), width : 50, height: 36.53}
    if (birdDimensions.x < man.x + man.width &&
        birdDimensions.x + birdDimensions.width > man.x &&
        birdDimensions.y < man.y + man.height &&
        birdDimensions.y + birdDimensions.height > man.y){
            character.stop()
            console.log("Crashed into the BIRB")
    } else {
        console.log("You skrt")
    }
}

function collisionWithIcerink(){
    var man = {x: parseInt(character.element.style.left), y: parseInt(character.element.style.top), width: 55, height: 77}
    var icerink = {x: parseInt(bird.element.style.left), y: parseInt(bird.element.style.top), width : 50, height: 36.53}
    if (icerink.x < man.x + man.width &&
        icerink.x + icerink.width > man.x &&
        icerink.y < man.y + man.height &&
        icerink.y + icerink.height > man.y){
            character.stop()
            console.log("Crashed into the BIRB")
    } else {
        console.log("You skrt")
    }
}
// This is assigning the walk variables to the arrow keys
document.addEventListener("keydown", function(e){
    if (e.keyCode == '38') {
        character.walkNorth()
    }
    if (e.keyCode == "40") {
        character.walkSouth()
    }
    if (e.keyCode == "37") {
        character.walkWest()
    }
    if (e.keyCode == "39") {
        character.walkEast()
    }
    if (e.keyCode == "32"){
        character.stop()
    }

})
