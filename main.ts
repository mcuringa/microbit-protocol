radio.onReceivedNumber(function (receivedNumber) {
    count = receivedNumber
    showIcon()
})
input.onButtonPressed(Button.A, function () {
    count += 1
    showIcon()
})
function showIcon () {
    if (count == 1) {
        // flower
        basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (count == 2) {
        basic.showIcon(IconNames.Heart)
    } else if (count == 3) {
        basic.showIcon(IconNames.Silly)
    } else if (count == 4) {
        basic.showIcon(IconNames.Giraffe)
    } else if (count == 5) {
        basic.showIcon(IconNames.StickFigure)
    } else if (count == 6) {
        basic.showIcon(IconNames.Butterfly)
    } else if (count == 10) {
        basic.showString("B")
    } else if (count == 8) {
        basic.showString("S")
    } else if (count == 9) {
        basic.showString("P")
    } else if (count == 7) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # . # . #
            # # # # #
            . # # # .
            `)
    } else if (count == 11) {
        basic.showString("N")
    } else if (count == 12) {
        basic.showString("A")
    } else {
        count = 1
    }
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(count)
})
input.onButtonPressed(Button.B, function () {
    count += -1
    showIcon()
})
let count = 0
radio.setGroup(1)
count = 0
