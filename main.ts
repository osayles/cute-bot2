cuteBot.moveTime(cuteBot.Direction.forward, 50, 0.2)
cuteBot.moveTime(cuteBot.Direction.right, 50, 1)
cuteBot.moveTime(cuteBot.Direction.forward, 50, 0.2)
cuteBot.moveTime(cuteBot.Direction.forward, 50, 0.2)
cuteBot.moveTime(cuteBot.Direction.left, 50, 1)
cuteBot.moveTime(cuteBot.Direction.forward, 50, 0.2)
cuteBot.closeheadlights()
cuteBot.stopcar()
cuteBot.singleheadlights(cuteBot.RGBLights.ALL, 51, 51, 51)
for (let index = 0; index < 4; index++) {
    music.playMelody("B A G A G F A C5 ", 285)
}
