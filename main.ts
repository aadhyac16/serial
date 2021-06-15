basic.forever(function () {
    for (let index = 0; index <= 1000; index++) {
        serial.writeValue("Current temparature", 0)
        basic.pause(5000)
    }
})
