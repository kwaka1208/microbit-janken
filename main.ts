function 準備をする () {
    自分の手 = 0
    グー = 0
    チョキ = 0
    パー = 0
    basic.showIcon(IconNames.Yes)
}
radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 0) {
        準備をする()
    } else {
        出した手を覚える(receivedNumber)
        勝ち負け判定()
    }
})
function 勝ち負け判定 () {
    if (手の種類 != 0 && 自分の手 != 0) {
        basic.pause(2000)
        出した手を覚える(自分の手)
        if (手の種類 != 2) {
            basic.showIcon(IconNames.Triangle)
        } else {
            自分の勝ち = 0
            if (自分の手 == 1 && チョキ == 1) {
                自分の勝ち = 1
            }
            if (自分の手 == 2 && パー == 1) {
                自分の勝ち = 1
            }
            if (自分の手 == 3 && グー == 1) {
                自分の勝ち = 1
            }
            if (自分の勝ち == 1) {
                basic.showIcon(IconNames.Heart)
            } else {
                basic.showIcon(IconNames.Skull)
            }
        }
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
    radio.sendNumber(0)
    準備をする()
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
function 出した手を覚える (数値: number) {
    if (数値 == 1) {
        グー = 1
    }
    if (数値 == 2) {
        チョキ = 1
    }
    if (数値 == 3) {
        パー = 1
    }
    手の種類 = グー + (チョキ + パー)
}
let 自分の勝ち = 0
let 手の種類 = 0
let パー = 0
let チョキ = 0
let グー = 0
let 自分の手 = 0
radio.setGroup(1)
準備をする()
