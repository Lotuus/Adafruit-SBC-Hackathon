input.onGesture(Gesture.Shake, function () {
    makerController.player1.reset()
    makerController.player1.press(ArcadeButton.A)
    light.showRing(
    `yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow`
    )
    makerController.player1.setButton(ArcadeButton.A, false)
    control.waitMicros(2000000)
})
forever(function () {
    if (input.buttonA.isPressed()) {
        makerController.player1.reset()
        light.showRing(
        "red red red red red red red red red red"
        )
        makerController.player1.setButton(ArcadeButton.Left, true)
    } else if (input.buttonB.isPressed()) {
        makerController.player1.reset()
        light.showRing(
        `blue blue blue blue blue blue blue blue blue blue`
        )
        makerController.player1.setButton(ArcadeButton.Right, true)
    } else {
        makerController.player1.setButton(ArcadeButton.Left, false)
        makerController.player1.setButton(ArcadeButton.Right, false)
        light.showRing(
        `black black black black black black black black black black`
        )
    }
})
