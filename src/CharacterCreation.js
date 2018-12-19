class Character {
    constructor(){
        let player = document.createElement('img') 
        player.src = `assets/character/static.gif` 
        player.id = 'player'
        
        player.style.position = 'absolute'
        player.style["z-index"] = 2
        player.style.left = '240px'
        player.style.top = '300px'
        player.style.width = "50px"
        player.className = 'created with JavaScript' 
        this.element = player
        this.movement = null
        document.body.appendChild(player)
    }

    walkWest(){
        this.stop()
        this.movement = setInterval(() => {
            let currentPosition = parseInt(this.element.style.left)
            this.element.style.left = currentPosition - 1 + 'px'
            collision()
        }, 15)   
        // console.log(this.movement)
        this.element.src = `assets/character/walkleft.gif`
    
    }
    walkEast(){
        this.stop()
        this.movement = setInterval(() => {
            let currentPosition = parseInt(this.element.style.left)
            this.element.style.left = currentPosition + 1 + 'px'
            collision()
        }, 15)  
    
        // console.log(this.movement)
        this.element.src = `assets/character/walkright.gif`
    }

    walkNorth(){
        this.stop()
        this.movement = setInterval(() => {
            let currentPosition = parseInt(this.element.style.top)
            this.element.style.top = currentPosition + -1 + 'px'
            collision()
        }, 15) 
        // console.log(this.movement)
        this.element.src = `assets/character/walkup.gif`
    }

    walkSouth(){
        this.stop()
        this.movement = setInterval(() => {
            let currentPosition = parseInt(this.element.style.top)
            this.element.style.top = currentPosition + 1 + 'px'
            collision()
        }, 15)   
        // console.log(this.movement)
        this.element.src = `assets/character/walkdown.gif`
    }

    stop(){
        clearInterval(this.movement)
        this.element.src = `assets/character/static.gif`
    }
}     