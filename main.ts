namespace SpriteKind {
    export const Car = SpriteKind.create()
}
function hideCars () {
    for (let value of sprites.allOfKind(SpriteKind.Car)) {
        value.setFlag(SpriteFlag.Ghost, true)
        value.setFlag(SpriteFlag.Invisible, true)
        tiles.setWallAt(value.tilemapLocation(), false)
    }
}
function createCars () {
    tempCars = []
    tempCars.push(createCar(assets.image`xHorizontal`, 2, "X", assets.image`xVertical`))
    tempCars.push(createCar(assets.image`AHorizontal`, 2, "A", assets.image`AVertical`))
    tempCars.push(createCar(assets.image`BHorizontal`, 2, "B", assets.image`BVertical`))
    tempCars.push(createCar(assets.image`CHorizontal`, 2, "C", assets.image`CVertical`))
    tempCars.push(createCar(assets.image`DHorizontal`, 2, "D", assets.image`DVertical`))
    tempCars.push(createCar(assets.image`EHorizontal`, 2, "E", assets.image`EVertical`))
    tempCars.push(createCar(assets.image`FHorizontal`, 2, "F", assets.image`FVertical`))
    tempCars.push(createCar(assets.image`GHorizontal`, 2, "G", assets.image`GVertical`))
    tempCars.push(createCar(assets.image`HHorizontal`, 2, "H", assets.image`HVertical`))
    tempCars.push(createCar(assets.image`IHorizontal`, 2, "I", assets.image`IVertical`))
    tempCars.push(createCar(assets.image`JHorizontal`, 2, "J", assets.image`JVertical`))
    tempCars.push(createCar(assets.image`KHorizontal`, 2, "K", assets.image`KVertical`))
    tempCars.push(createCar(assets.image`OHorizontal`, 3, "O", assets.image`OVertical`))
    tempCars.push(createCar(assets.image`PHorizontal`, 3, "P", assets.image`PVertical`))
    tempCars.push(createCar(assets.image`QHorizontal`, 3, "Q", assets.image`QVertical`))
    tempCars.push(createCar(assets.image`RHorizontal`, 3, "R", assets.image`RVertical`))
    return tempCars
}
function findCarById (ID: string) {
    for (let value of cars) {
        if (sprites.readDataString(value, "ID") == ID) {
            return cars.indexOf(value)
        }
    }
    return 0
}
function setWallInCarLocation (carSprite: Sprite, direction: string) {
    if (direction == "horizontal direita" || direction == "horizontal esquerda") {
        tempCarWidth = sprites.readDataNumber(carSprite, "WIDTH") - 1
        for (let index = 0; index <= tempCarWidth; index++) {
            tiles.setWallAt(tiles.getTileLocation(carSprite.tilemapLocation().column + (index - 1), carSprite.tilemapLocation().row), true)
        }
    } else if (direction == "vertical cima" || direction == "vertical baixo") {
        tempCarWidth = sprites.readDataNumber(carSprite, "WIDTH") - 1
        for (let index = 0; index <= tempCarWidth; index++) {
            tiles.setWallAt(tiles.getTileLocation(carSprite.tilemapLocation().column, carSprite.tilemapLocation().row + (index - 1)), true)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    handHolding = true
    hand.setImage(assets.image`handClosed`)
})
function createCar (image2: Image, width: number, id: string, verticalImage: Image) {
    tempCar = sprites.create(image2, SpriteKind.Car)
    sprites.setDataString(tempCar, "ID", id)
    sprites.setDataNumber(tempCar, "WIDTH", width)
    sprites.setDataImageValue(tempCar, "verticalImage", verticalImage)
    sprites.setDataImageValue(tempCar, "horizontalImage", image2)
    return tempCar
}
function positionCar (direcao: string, posicaoFrenteX: number, posicaoFrenteY: number, carro: Sprite) {
    carro.setImage(sprites.readDataImage(carro, "horizontalImage"))
    posX = posicaoFrenteX * 16 + carro.width / 2
    posY = posicaoFrenteY * 16 + carro.height / 2
    if (direcao == "horizontal esquerda") {
        carro.image.flipX()
    } else if (direcao == "vertical baixo") {
        carro.setImage(sprites.readDataImage(carro, "verticalImage"))
        posX = posicaoFrenteX * 16 + carro.width / 2
        posY = posicaoFrenteY * 16 + carro.height / 2
    } else if (direcao == "vertical cima") {
        carro.setImage(sprites.readDataImage(carro, "verticalImage"))
        carro.image.flipY()
        posX = posicaoFrenteX * 16 + carro.width / 2
        posY = posicaoFrenteY * 16 + carro.height / 2
    }
    carro.setPosition(posX, posY)
    carro.setFlag(SpriteFlag.Ghost, false)
    carro.setFlag(SpriteFlag.Invisible, false)
    setWallInCarLocation(carro, direcao)
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    handHolding = false
    hand.setImage(assets.image`handOpened`)
})
function setNotWallInCarLocation (carSprite: Sprite, direction: string) {
    if (direction == "horizontal direita" || direction == "horizontal esquerda") {
        tempCarWidth = sprites.readDataNumber(carSprite, "WIDTH") - 1
        for (let index = 0; index <= tempCarWidth; index++) {
            tiles.setWallAt(tiles.getTileLocation(carSprite.tilemapLocation().column + (index - 1), carSprite.tilemapLocation().row), false)
        }
    } else if (direction == "vertical cima" || direction == "vertical baixo") {
        tempCarWidth = sprites.readDataNumber(carSprite, "WIDTH") - 1
        for (let index = 0; index <= tempCarWidth; index++) {
            tiles.setWallAt(tiles.getTileLocation(carSprite.tilemapLocation().column, carSprite.tilemapLocation().row + (index - 1)), false)
        }
    }
}
let posY = 0
let posX = 0
let tempCar: Sprite = null
let tempCarWidth = 0
let tempCars: Sprite[] = []
let cars: Sprite[] = []
let handHolding = false
let hand: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`transito`)
hand = sprites.create(assets.image`handOpened`, SpriteKind.Player)
controller.moveSprite(hand)
hand.z += 100
hand.setFlag(SpriteFlag.GhostThroughWalls, true)
hand.setStayInScreen(true)
handHolding = false
cars = createCars()
let cards = 0
hideCars()
positionCar("vertical cima", 2, 1, cars[findCarById("X")])
