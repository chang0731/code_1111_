basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        led.plot(2 + I, 2)
        led.plot(2 - I, 2)
        led.plot(2, 2 + I)
        led.plot(2, 2 - I)
        basic.pause(200)
    }
})
