

window.addEventListener("load", function () {
    const pianoKeys= document.getElementById("piano").contentDocument // since we inserted our SVG into the HTML using the external object element, we have to use contentDocument to access the innards of the SVG file
    const pianoWhiteKeysCollection = pianoKeys.getElementsByClassName("white-keys") //returns an object containing all white keys
    const pianoWhiteKeys = [...pianoWhiteKeysCollection] //this object has to be turned into an array so we can access it with the forEach method
    
    pianoWhiteKeys.forEach( key => {
        key.addEventListener("click", function () {
        soundNumber = key.getAttribute("data-audio")
        let audio = new Audio(`assets/audio/key${soundNumber}.mp3`)
        audio.play()
        })
    });

// repeat the same process for the blackkeys
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