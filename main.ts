input.onButtonPressed(Button.A, function () {
    test_2 = game.createSprite(2, 2)
})
input.onGesture(Gesture.TiltRight, function () {
    if (etra == 0) {
        test_2.move(1)
    } else {
        test_2.turn(Direction.Right, 45)
        test_2.move(1)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (etra == 0) {
        test_2.turn(Direction.Left, 90)
        test_2.move(1)
    } else {
        test_2.turn(Direction.Left, 45)
        test_2.move(1)
    }
})
let test_2: game.LedSprite = null
let etra = 0
let test = game.createSprite(randint(0, 5), randint(0, 5))
etra = 0
basic.forever(function () {
	
})
