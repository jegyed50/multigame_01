input.onButtonPressed(Button.A, function () {
    if (ProgramSorszam == 0) {
        music.playMelody("C - C - C - C - ", 120)
    } else if (ProgramSorszam == 1) {
        music.playMelody("F - F - F - F - ", 120)
    } else {
        music.playMelody("C5 - C5 - C5 - C5 - ", 120)
    }
})
function Game2 () {
    basic.clearScreen()
    basic.showNumber(2)
}
function Game0 () {
    basic.clearScreen()
    basic.showNumber(0)
}
input.onButtonPressed(Button.AB, function () {
    if (ProgramSorszam < 2) {
        ProgramSorszam = ProgramSorszam + 1
    } else {
        ProgramSorszam = 0
    }
    if (ProgramSorszam == 0) {
        Game0()
    } else if (ProgramSorszam == 1) {
        Game1()
    } else {
        Game2()
    }
})
input.onButtonPressed(Button.B, function () {
    if (ProgramSorszam == 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (ProgramSorszam == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
})
function Game1 () {
    basic.clearScreen()
    basic.showNumber(1)
}
let ProgramSorszam = 0
ProgramSorszam = 0
basic.clearScreen()
basic.showNumber(0)
basic.forever(function () {
	
})
