for (let index = 0; index <= 4; index++) {
    led.plot(randint(index, 4), 0)
    led.plot(0, 0)
    basic.pause(500)
}
basic.forever(function () {
	
})
