// let characterNew = new
// This is creating an image tag in JS that is going to be used in HTML
let bird = new Bird()
// let sky = document.createElement('img')
let sky = new Sky() 
let characterElement = new Character()




// sky.src = `assets/PixelArt/sky.png`


// sky.style = {}
// sky.style.position = 'absolute'
// sky.style.left = '20px'
// sky.style.top = '0px'
// sky.style.width = "600px"
// sky.className = 'created with JavaScript'

// This pastes that bird or the boyo on the body
// document.body.appendChild(sky)


// This is where the collision is with my bird and my boyo
function collision(){
    var man = {x: parseInt(characterElement.style.left), y: parseInt(characterElement.style.top), width: 55, height: 77}
    var birdDimensions = {x: parseInt(bird.style.left), y: parseInt(bird.style.top), width : 50, height: 36.53}
    
        if (birdDimensions.x < man.x + man.width &&
            birdDimensions.x + birdDimensions.width > man.x &&
            birdDimensions.y < man.y + man.height &&
            birdDimensions.y + bird.height > man.y)
            stop() + console.log("Crashed into the BIRB")
        else
            console.log("nothing")
}

// These are variables that allow the boyo to walk north, east, south, and west.


function walkWest(){
    stop()
    movement = setInterval(function(){
        collision()
        let currentPosition = parseInt(characterElement.style.left)
        characterElement.style.left = currentPosition - 1 + 'px'
    }, 15)   
    console.log(movement)
    characterElement.src = `assets/character/walkleft.gif`
}

function walkEast(){
    stop()
    movement = setInterval(function(){
        collision()
        let currentPosition = parseInt(characterElement.style.left)

        characterElement.style.left = currentPosition + 1 + 'px'
    }, 15)  

    console.log(movement)

    characterElement.src = `assets/character/walkright.gif`
}

function walkNorth(){
    stop()
    movement = setInterval(function(){
        collision()
        let currentPosition = parseInt(characterElement.style.top)
        characterElement.style.top = currentPosition + -1 + 'px'
    }, 15) 
    console.log(movement)
    characterElement.src = `assets/character/walkup.gif`
}

function walkSouth(){
    stop()
    movement = setInterval(function(){
        collision()
        let currentPosition = parseInt(characterElement.style.top)
        characterElement.style.top = currentPosition + 1 + 'px'
    }, 15)   
    console.log(movement)
    characterElement.src = `assets/character/walkdown.gif`
}
function stop(){
    clearInterval(movement)
    characterElement.src = `assets/character/static.gif`
}
// This is assigning the walk variables to the arrow keys
document.addEventListener("keydown", function(e){
    if (e.keyCode == '38') {
        walkNorth()
    }
    if (e.keyCode == "40") {
        walkSouth()
    }
    if (e.keyCode == "37") {
        walkWest()
    }
    if (e.keyCode == "39") {
        walkEast()
    }
    if (e.keyCode == "32"){
        stop()
    }

})
