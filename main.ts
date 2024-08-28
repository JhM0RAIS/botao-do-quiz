input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let botaoNaoPressionado = true
basic.forever(function () {
    while (botaoNaoPressionado) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            music.ringTone(262)
            botaoNaoPressionado = false
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            music.ringTone(523)
            botaoNaoPressionado = false
        }
    }
})
