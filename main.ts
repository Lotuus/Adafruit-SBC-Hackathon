input.onGesture(Gesture.Shake, function () {
    makerController.player1.setButton(ArcadeButton.Left, false)
    makerController.player1.setButton(ArcadeButton.Right, false)
    makerController.player1.press(ArcadeButton.A)
    light.onboardStrip().showAnimation(light.sparkleAnimation, 500)
    makerController.player1.setButton(ArcadeButton.A, false)
    makerController.player1.setButton(ArcadeButton.Left, false)
    makerController.player1.setButton(ArcadeButton.Right, false)
})
forever(function () {
    if (input.buttonA.isPressed()) {
        makerController.player1.setButton(ArcadeButton.Left, false)
        makerController.player1.setButton(ArcadeButton.Right, false)
        makerController.player1.setButton(ArcadeButton.Left, true)
    } else if (input.buttonB.isPressed()) {
        makerController.player1.setButton(ArcadeButton.Left, false)
        makerController.player1.setButton(ArcadeButton.Right, false)
        makerController.player1.setButton(ArcadeButton.Right, true)
    } else {
        makerController.player1.setButton(ArcadeButton.Left, false)
        makerController.player1.setButton(ArcadeButton.Right, false)
    }
})
