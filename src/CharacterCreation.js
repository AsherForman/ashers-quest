class Character {
    constructor(){
        let player = document.createElement('img') 
        player.src = `assets/character/static.gif` 
        
        player.style.position = 'absolute'
        player.style["z-index"] = 2
        player.style.left = '30px'
        player.style.top = '40px'
        player.style.width = "50px"
        player.className = 'created with JavaScript' 
        
        document.body.appendChild(player)
    }

}     