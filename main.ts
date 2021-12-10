input.onGesture(Gesture.TiltRight, function () {
    if (_2_2 == 0) {
        led.unplot(2, 2)
        led.plot(3, 2)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (_2_2 == 0) {
        led.unplot(2, 2)
        led.plot(1, 2)
    }
})
let _2_2 = 0
led.plot(randint(0, 5), randint(0, 5))
led.plot(2, 2)
_2_2 = 0
basic.forever(function () {
    if (0 == 0) {
    	
    }
})
