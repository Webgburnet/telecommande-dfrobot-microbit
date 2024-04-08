let y = 0
let x = 0
radio.setGroup(255)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("B")
    } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        radio.sendString("Z")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        radio.sendString("Vert")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        radio.sendString("Jaune")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        radio.sendString("Rouge")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        radio.sendString("Bleu")
    } else {
        x = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, -100, 100)
        y = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, -100, 100)
        radio.sendValue("x", x)
        radio.sendValue("y", y)
    }
})
