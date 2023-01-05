radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        255
        )
    } else if (receivedNumber == 2) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M3,
        -255
        )
    } else if (receivedNumber == 3) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        255
        )
    } else if (receivedNumber == 4) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        0
        )
    } else if (receivedNumber == 5) {
        SuperBit.MotorStopAll()
    } else if (receivedNumber == 6) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    } else {
        SuperBit.MotorStopAll()
    }
})
radio.setGroup(10)
