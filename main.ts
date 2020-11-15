basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        led.plot(2 + I, 2)
        led.plot(2 - I, 2)
        led.plot(2, 2 + I)
        led.plot(2, 2 - I)
        basic.pause(200)
    }
    for (let I2 = 0; I2 <= 4; I2++) {
        led.unplot(2 + (2 - I2), 2)
        led.unplot(2 - (2 - I2), 2)
        led.unplot(2, 2 + (2 - I2))
        led.unplot(2, 2 - (2 - I2))
        basic.pause(200)
    }
})
