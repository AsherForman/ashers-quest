class Bird {
    constructor () {
        let bird = document.createElement('img')
        
        bird.src = `assets/PixelArt/SmallBird.png`
        bird.id = 'bird'
        
        bird.style.position = 'absolute'
        bird.style["z-index"] = 2
        bird.style.left = '200px'
        bird.style.top = '0px'
        bird.style.width = "50px"
        bird.className = 'created with JavaScript' 
        this.element = bird
        document.body.appendChild(bird)
    }
}