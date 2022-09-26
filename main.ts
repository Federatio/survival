let timer = 0
input.onButtonPressed(Button.AB, function () {
    timer = 0
    while (600 > timer) {
        basic.pause(1000)
        timer += 1
    }
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
