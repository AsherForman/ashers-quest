class Character {
    constructor(){
        let player = document.createElement('img') 
        player.src = `assets/character/static.gif` 
        
        player.style.position = 'absolute'
        player.style.left = '0px'
        player.style.top = '0px'
        player.style.width = "50px"
        player.className = 'created with JavaScript' /
        
        document.body.appendChild(player)
    }
}

