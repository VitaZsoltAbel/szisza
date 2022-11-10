input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let érték = 0
let sor = 0
if (sor == 1) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    music.playTone(131, music.beat(BeatFraction.Whole))
}
if (sor == 2) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # # . . .
        `)
    music.playTone(220, music.beat(BeatFraction.Whole))
}
if (sor == 3) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # . .
        # # # . .
        `)
    music.playTone(440, music.beat(BeatFraction.Whole))
}
if (sor == 4) {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # # .
        . # # # .
        # # # # .
        `)
    music.playTone(587, music.beat(BeatFraction.Whole))
}
if (sor == 5) {
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . # # # #
        # # # # #
        `)
    music.playTone(988, music.beat(BeatFraction.Whole))
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (sor < 5) {
            érték += 1
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (sor > 0) {
            érték += -1
        }
    }
})
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
	
})
