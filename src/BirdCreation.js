class Bird {
    constructor () {
        let bird = document.createElement('img')
        console.log(characterElement)
        
        bird.src = `assets/PixelArt/SmallBird.png`
        
        bird.style.position = 'absolute'
        bird.style.left = '200px'
        bird.style.top = '0px'
        bird.style.width = "50px"
        bird.className = 'created with JavaScript' /
        
        document.body.appendChild(bird)
    }
}