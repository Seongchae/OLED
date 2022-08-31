/**
 * -확장-"OLED-ssd1306"블록 꾸러미 다운로드
 * 
 * -비례변환 블록은 아날로그 값이 0-1023인 '밝기'변수의 최댓값을 100까지 제한한다는 의미임. 
 * 
 * 최댓값을 100으로 제한하는 이유는 oled의 밝기를 표시하는 막대바가 숫자 100까지만 표혈할 수 있기 때문임.
 */
input.onButtonPressed(Button.A, function () {
    OLED.drawLoading(pins.map(
    밝기,
    0,
    1023,
    0,
    100
    ))
})
let 밝기 = 0
OLED.init(128, 64)
basic.forever(function () {
    밝기 = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P2, 밝기)
})
