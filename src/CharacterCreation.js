class Character {
    constructor(){
        let player = document.createElement('img') 
        let bird = document.createElement('img')
        player.src = `assets/character/static.gif` 
        
        player.style.position = 'absolute'
        player.style.left = '30px'
        player.style.top = '40px'
        player.style.width = "50px"
        player.className = 'created with JavaScript' /
        
        bird.src = `assets/PixelArt/SmallBird.png`

        bird.style.position = 'absolute'
        bird.style.left = '200px'
        bird.style.top = '0px'
        bird.style.width = "50px"
        bird.className = 'created with JavaScript' 
        document.body.appendChild(bird)
        
        document.body.appendChild(player)
    }

     collision(){
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

     walkWest(){
        stop()
        movement = setInterval(function(){
            collision()
            let currentPosition = parseInt(characterElement.style.left)
            characterElement.style.left = currentPosition - 1 + 'px'
        }, 15)   
        console.log(movement)
        characterElement.src = `assets/character/walkleft.gif`
    }
    
     walkEast(){
        stop()
        movement = setInterval(function(){
            collision()
            let currentPosition = parseInt(characterElement.style.left)
    
            characterElement.style.left = currentPosition + 1 + 'px'
        }, 15)  
    
        console.log(movement)
    
        characterElement.src = `assets/character/walkright.gif`
    }
    
     walkNorth(){
        stop()
        movement = setInterval(function(){
            collision()
            let currentPosition = parseInt(characterElement.style.top)
            characterElement.style.top = currentPosition + -1 + 'px'
        }, 15) 
        console.log(movement)
        characterElement.src = `assets/character/walkup.gif`
    }
    
     walkSouth(){
        stop()
        movement = setInterval(function(){
            collision()
            let currentPosition = parseInt(characterElement.style.top)
            characterElement.style.top = currentPosition + 1 + 'px'
        }, 15)   
        console.log(movement)
        characterElement.src = `assets/character/walkdown.gif`
    }
     stop(){
        clearInterval(movement)
        characterElement.src = `assets/character/static.gif`
    }
}

