input.onButtonPressed(Button.A, function () {
    Goal += 0
    ROTORDELAY += 500
    basic.showNumber(Goal)
    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
})
let Goal = 0
basic.showIcon(IconNames.Happy)
Goal = 0
let SCORE = 0
let ROTORDELAY = 500
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.LoopingInBackground)
basic.forever(function () {
    rekabit.setServoPosition(ServoChannel.S1, 120)
    basic.pause(ROTORDELAY)
    rekabit.setServoPosition(ServoChannel.S1, 85)
    basic.pause(ROTORDELAY)
    Goal = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    rekabit.setAllRgbPixelsColor(0x00ffff)
    if (Goal <= 14) {
        Goal += 1
        basic.showNumber(Goal)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        basic.pause(500)
        if (Goal >= 5 && Goal <= 8) {
            ROTORDELAY = 2
        }
        if (Goal > 5) {
            ROTORDELAY = 100
        }
    }
})
