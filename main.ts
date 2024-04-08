radio.setGroup(1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.showNumber(8)
    } else {
    	
    }
})
