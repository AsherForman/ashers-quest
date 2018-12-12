class Sky {
    constructor () {
        let sky = document.createElement('img')
        sky.src = `assets/PixelArt/sky.png`

        sky.style = {}
        sky.style.position = 'absolute'
        sky.style["z-index"] = 0
        sky.style.left = '20px'
        sky.style.top = '0px'
        sky.style.width = "600px"
        sky.className = 'created with JavaScript'

        document.body.appendChild(sky)

    }
}