

window.addEventListener("load", function () {
    const pianoKeys= document.getElementById("piano").contentDocument
    const pianoWhiteKeysCollection = pianoKeys.getElementsByClassName("white-keys")
    const pianoWhiteKeys = [...pianoWhiteKeysCollection]
    
    pianoWhiteKeys.forEach( key => {
        key.addEventListener("click", function () {
        soundNumber = key.getAttribute("data-audio")
        console.log(soundNumber)
        let audio = new Audio(`assets/audio/key${soundNumber}.mp3`)
        audio.play()
        })
    });


    const pianoBlackKeysCollection = pianoKeys.getElementsByClassName("black-keys")
    const pianoBlackKeys = [...pianoBlackKeysCollection]

    pianoBlackKeys.forEach(
        key => {
            key.addEventListener("click", function () {
            soundNumber = key.getAttribute("data-audio")
            let audio = new Audio(`assets/audio/key${soundNumber}.mp3`)
            audio.play()
            })
        }
    )
})