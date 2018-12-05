
class Movement {
    constructor() {
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
    }
}