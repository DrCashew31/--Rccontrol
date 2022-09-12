radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if (receivedNumber == 2) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    } else if (receivedNumber == 3) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        255
        )
        music.setVolume(255)
        music.playMelody("D E E E E E C C ", 387)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 4) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M3,
        -255
        )
        music.setVolume(255)
        music.playMelody("A - A - A - A - ", 120)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedNumber == 5) {
        SuperBit.MotorStopAll()
        basic.showLeds(`
            # . . # #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        SuperBit.MotorStopAll()
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(10)
