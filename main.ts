input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(400)
    scissors_paper_rock = randint(1, 3)
    basic.showNumber(scissors_paper_rock)
    if (scissors_paper_rock == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (scissors_paper_rock == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (scissors_paper_rock == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (counter != 2) {
        counter += 1
    } else {
        basic.pause(2000)
        game.gameOver()
    }
})
let counter = 0
let scissors_paper_rock = 0
scissors_paper_rock = 0
counter = 0
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
