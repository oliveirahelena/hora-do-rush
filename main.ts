namespace SpriteKind {
    export const Car = SpriteKind.create()
}
function createCars () {
    tempCars = []
    tempCar = sprites.create(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, SpriteKind.Player)
    controller.moveSprite(tempCar)
    sprites.setDataString(tempCar, "ID", "X")
    sprites.setDataNumber(tempCar, "WIDTH", 2)
    tempCars.push(tempCar)
    tempCars.push(createCar(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, 2, "A"))
    tempCars.push(createCar(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, 2, "B"))
    tempCars.push(createCar(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, 2, "C"))
    tempCars.push(createCar(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, 2, "D"))
    tempCars.push(createCar(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, 2, "E"))
    tempCars.push(createCar(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, 2, "F"))
    tempCars.push(createCar(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, 2, "G"))
    tempCars.push(createCar(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, 2, "H"))
    tempCars.push(createCar(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, 2, "I"))
    tempCars.push(createCar(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, 2, "J"))
    tempCars.push(createCar(img`
        ................................
        ....22222222222222222222222.....
        ...24222222222222222222222c2....
        ..2c4222222222222222222222cc2...
        .2cc4444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbebbbbbbbbbbbbbbbbbbeeb422.
        .2ebbbebbbbbbbbbbbbbbbbbbbe2222.
        .ee222e22222222222222222222e222.
        .eeeeeefffffeeeeeeeeeeeeeefe2dd.
        .eeeeeefffffeeeeeeeeeeeeefeee2d.
        .eeeeeeffffffffffffffffffeeeeee.
        .effffeeeeeeeeeeeeeeeeeeefffeee.
        ..fffffeeeeeefffffeeeeeefffffe..
        ...fff........fff........ffff...
        ................................
        `, 2, "K"))
    tempCars.push(createCar(img`
        ................................................
        ....222222222222222222222222222222222222222.....
        ...242222222222222222222222222222222222222c2....
        ..2c42222222222222222222222222222222222222cc2...
        .2cc44444444444444444444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbeeb422.
        .2ebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbe2222.
        .ee222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222e222.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefe2dd.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeefeee2d.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeee.
        .effffeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeefffeee.
        ..fffff.............fff...............eefffffe..
        ...fff..............fff..................ffff...
        ................................................
        `, 3, "O"))
    tempCars.push(createCar(img`
        ................................................
        ....222222222222222222222222222222222222222.....
        ...242222222222222222222222222222222222222c2....
        ..2c42222222222222222222222222222222222222cc2...
        .2cc44444444444444444444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbeeb422.
        .2ebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbe2222.
        .ee222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222e222.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefe2dd.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeefeee2d.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeee.
        .effffeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeefffeee.
        ..fffff.............fff...............eefffffe..
        ...fff..............fff..................ffff...
        ................................................
        `, 3, "P"))
    tempCars.push(createCar(img`
        ................................................
        ....222222222222222222222222222222222222222.....
        ...242222222222222222222222222222222222222c2....
        ..2c42222222222222222222222222222222222222cc2...
        .2cc44444444444444444444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbeeb422.
        .2ebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbe2222.
        .ee222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222e222.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefe2dd.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeefeee2d.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeee.
        .effffeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeefffeee.
        ..fffff.............fff...............eefffffe..
        ...fff..............fff..................ffff...
        ................................................
        `, 3, "Q"))
    tempCars.push(createCar(img`
        ................................................
        ....222222222222222222222222222222222222222.....
        ...242222222222222222222222222222222222222c2....
        ..2c42222222222222222222222222222222222222cc2...
        .2cc44444444444444444444444444444444444442cc42d.
        .2c2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebc422.
        .22ebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbeeb422.
        .2ebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbe2222.
        .ee222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222e222.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefe2dd.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeefeee2d.
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeee.
        .effffeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeefffeee.
        ..fffff.............fff...............eefffffe..
        ...fff..............fff..................ffff...
        ................................................
        `, 3, "R"))
    return tempCars
}
function createCar (image2: Image, width: number, id: string) {
    tempCar = sprites.create(image2, SpriteKind.Car)
    sprites.setDataString(tempCar, "ID", id)
    sprites.setDataNumber(tempCar, "WIDTH", width)
    tempCar.setFlag(SpriteFlag.Ghost, true)
    tempCar.setFlag(SpriteFlag.Invisible, true)
    return tempCar
}
function positionCar (direcao: string, posicaoFrenteX: number, posicaoFrenteY: number, carro: Sprite) {
    posX = posicaoFrenteX * 16 + carro.width / 2
    posY = posicaoFrenteY * 16 + carro.height / 2
    carro.setPosition(posX, posY)
    if (direcao == "horizontal esquerda") {
        carro.image.flipX()
        posX = posicaoFrenteX * 16 - carro.width / 2
    } else if (direcao == "vertical baixo") {
        carro.image.flipY()
    } else if (direcao == "vertical cima") {
        carro.image.flipY()
    }
    carro.setFlag(SpriteFlag.Ghost, false)
    carro.setFlag(SpriteFlag.Invisible, false)
    tiles.setWallAt(carro.tilemapLocation(), true)
}
let posY = 0
let posX = 0
let tempCar: Sprite = null
let tempCars: Sprite[] = []
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`transito`)
let cars = createCars()
let cards = 0
positionCar("horizontal direita", 2, 1, cars[1])
