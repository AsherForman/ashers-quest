class Crash {
    constructor () {
        function collision(){
            var man = {x: parseInt(characterElement.style.left), y: parseInt(characterElement.style.top), width: 55, height: 77}
            var bird = {x: parseInt(bird1.style.left), y: parseInt(bird1.style.top), width : 50, height: 36.53}
            
                if (bird.x < man.x + man.width &&
                    bird.x + bird.width > man.x &&
                    bird.y < man.y + man.height &&
                    bird.y + bird.height > man.y)
                    stop() + console.log("Crashed into the BIRB")
                else
                    console.log("nothing")
        
    }
}

}