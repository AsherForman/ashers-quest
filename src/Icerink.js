class Icerink {
    constructor () {
        let ice = document.createElement('img')
        ice.src = `assets/PixelArt/Icerink.jpg`

        ice.style = {}
        ice.style.position = 'absolute'
        ice.style["z-index"] = 0
        ice.style.left = '20px'
        ice.style.top = '0px'
        ice.style.width = "500px"
        ice.style.height = "700px"
        ice.className = 'created with JavaScript'

        document.body.appendChild(ice)

    }
}