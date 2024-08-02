const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

const hexValue = randomColor
const hexCode = document.querySelector('#hexCode')

let pauseColor;
const startChangingColor = function(){
    if(!pauseColor){
        pauseColor = setInterval(function(){
            document.body.style.backgroundColor = randomColor()
        hexCode.innerHTML = `${hexValue}`
        }, 1000)
    }
}

const stopChangingColor = function(){
    clearInterval(pauseColor)
    pauseColor = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
