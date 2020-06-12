function 準備をする () {
    自分の手 = 0
    他の人の手 = 0
    出された手のリスト = [0, 0, 0, 0]
    basic.showIcon(IconNames.Yes)
}
radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 0) {
        準備をする()
    } else {
        出された手のリスト[receivedNumber] = 1
        勝ち負け判定()
    }
})
function 勝ち負け判定 () {
    手の種類 = 出された手のリスト[1] + (出された手のリスト[2] + 出された手のリスト[3])
    if (手の種類 != 0 && 自分の手 != 0) {
        basic.pause(2000)
        出された手のリスト[自分の手] = 1
        手の種類 = 出された手のリスト[1] + (出された手のリスト[2] + 出された手のリスト[3])
        if (手の種類 != 2) {
            basic.showIcon(IconNames.Triangle)
        } else {
            カウンター = 1
            for (let index = 0; index < 3; index++) {
                if (出された手のリスト[カウンター] == 1) {
                    if (カウンター != 自分の手) {
                        他の人の手 = カウンター
                    }
                }
                カウンター += 1
            }
            if (他の人の手 == 1) {
                他の人の手 = 4
            }
            if (自分の手 + 1 == 他の人の手) {
                basic.showIcon(IconNames.Heart)
            } else {
                basic.showIcon(IconNames.Skull)
            }
        }
        出された手のリスト = [0, 0, 0, 0]
    }
}
input.onButtonPressed(Button.A, function () {
    if (自分の手 == 0) {
        自分の手 = 1
        radio.sendNumber(自分の手)
        basic.showIcon(IconNames.Diamond)
        勝ち負け判定()
    }
})
input.onGesture(Gesture.Shake, function () {
    準備をする()
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    if (自分の手 == 0) {
        自分の手 = 3
        radio.sendNumber(自分の手)
        basic.showIcon(IconNames.Square)
        勝ち負け判定()
    }
})
input.onButtonPressed(Button.B, function () {
    if (自分の手 == 0) {
        自分の手 = 2
        radio.sendNumber(自分の手)
        basic.showIcon(IconNames.Scissors)
        勝ち負け判定()
    }
})
let カウンター = 0
let 手の種類 = 0
let 出された手のリスト: number[] = []
let 他の人の手 = 0
let 自分の手 = 0
radio.setGroup(1)
準備をする()
