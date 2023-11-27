input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(400)
    scissors_paper_rock = randint(1, 3)
    basic.showNumber(scissors_paper_rock)
})
let scissors_paper_rock = 0
scissors_paper_rock = 0
let counter = 0
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
