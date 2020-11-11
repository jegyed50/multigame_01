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
