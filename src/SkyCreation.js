class Sky {
    constructor (){
        let sky = document.createElement('img')
        console.log(characterElement)
        
        sky.src = `assets/PixelArt/sky.png`
        
        sky.style.position = 'absolute'
        sky.style.left = '100px'
        sky.style.top = '0px'
        sky.style.width = "400px"
        sky.className = 'created with JavaScript' /
        
        document.body.appendChild(sky)
    }
}