// What type of variable is "characterElement"?
// Uncomment the console.log below to see for yourself!
let characterElement = document.createElement('img') 
console.log(characterElement)
let bird = document.createElement('img')
console.log(characterElement)
let sky = document.createElement('img')
console.log(characterElement)
// What is the SRC attribute of an image tag used for? 
// Does this change the HTML when you view it in the elements pane of your developers console?
characterElement.src = `assets/character/static.gif` 
bird.src = `assets/PixelArt/SmallBird.png`
sky.src = `assets/PixelArt/sky.png`
// What is "characterElement.style"?

sky.style.position = 'absolute'
sky.style.left = '100px'
sky.style.top = '0px'
sky.style.width = "400px"
sky.className = 'created with JavaScript' /

document.body.appendChild(sky)

characterElement.style.position = 'absolute'
characterElement.style.left = '0px'
characterElement.style.top = '0px'
characterElement.style.width = "50px"
characterElement.className = 'created with JavaScript' /

document.body.appendChild(characterElement)


bird.style.position = 'absolute'
bird.style.left = '200px'
bird.style.top = '0px'
bird.style.width = "50px"
bird.className = 'created with JavaScript' /

document.body.appendChild(bird)

function collision(){
    var man = {x: parseInt(characterElement.left), y: parseInt(characterElement.top), width: 55, height: 77}
    var bird = {x: parseInt(bird.style.left), y: parseInt(bird.style.top), width : 50, height: 36.53}
    
        if (bird.x < man.x + man.width &&
            bird.x + bird.width > man.x &&
            bird.y < man.y + man.height &&
            bird.y + bird.height > man.y)
            stop() + console.log("Crashed into the BIRB")
        else
            console.log("nothing")
}

let movement; 
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
