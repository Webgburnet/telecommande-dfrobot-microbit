radio.setGroup(255)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("B")
    } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendString("Z")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("Verte")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("Jaune")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("Rouge")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendString("Bleu")
    } else {
        if (pins.analogReadPin(AnalogPin.P2) > 550 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
            radio.sendString("Avancer")
        } else if (pins.analogReadPin(AnalogPin.P2) < 450 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
            radio.sendString("Reculer")
        } else if (pins.analogReadPin(AnalogPin.P1) < 450 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
            radio.sendString("Gauche")
        } else if (pins.analogReadPin(AnalogPin.P1) > 550 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
            radio.sendString("Droite")
        } else {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 1)
        }
    }
})
