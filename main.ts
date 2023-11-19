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
    } else {
    	
    }
})
let scissors_paper_rock = 0
scissors_paper_rock = 0
