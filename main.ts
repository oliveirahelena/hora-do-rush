namespace SpriteKind {
    export const Car = SpriteKind.create()
    export const Target = SpriteKind.create()
}
function isCarOnTopOfWall (carSprite: Sprite) {
    if (carSprite.width >= 32) {
        tempCarWidth = sprites.readDataNumber(carSprite, "WIDTH") - 1
        for (let index = 0; index <= tempCarWidth; index++) {
            if (tiles.tileAtLocationIsWall(tiles.getTileLocation(carSprite.tilemapLocation().column + (index - 1), carSprite.tilemapLocation().row))) {
                return true
            }
        }
    } else if (carSprite.height >= 32) {
        tempCarWidth = sprites.readDataNumber(carSprite, "WIDTH") - 1
        for (let index = 0; index <= tempCarWidth; index++) {
            if (tiles.tileAtLocationIsWall(tiles.getTileLocation(carSprite.tilemapLocation().column, carSprite.tilemapLocation().row + (index - 1)))) {
                return true
            }
        }
    }
    return false
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (holdingCar && sprites.readDataString(holdingCar, "DIRECTION").includes("vertical")) {
        if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(holdingCar), CollisionDirection.Top)))) {
            tiles.placeOnTile(hand, tiles.locationInDirection(tiles.locationOfSprite(holdingCar), CollisionDirection.Top))
            hand.y += -8
        }
    }
})
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
function setWallInCarLocation (carSprite: Sprite) {
    if (carSprite.width >= 32) {
        tempCarWidth = sprites.readDataNumber(carSprite, "WIDTH") - 1
        for (let index = 0; index <= tempCarWidth; index++) {
            tiles.setWallAt(tiles.getTileLocation(carSprite.tilemapLocation().column + (index - 1), carSprite.tilemapLocation().row), true)
        }
    } else if (carSprite.height >= 32) {
        tempCarWidth = sprites.readDataNumber(carSprite, "WIDTH") - 1
        for (let index = 0; index <= tempCarWidth; index++) {
            tiles.setWallAt(tiles.getTileLocation(carSprite.tilemapLocation().column, carSprite.tilemapLocation().row + (index - 1)), true)
        }
    }
}
function positionSpriteInTileMap (mySprite: Sprite, col: number, row: number) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(col, row))
    sprites.setDataNumber(mySprite, "LASTCOL", col)
    sprites.setDataNumber(mySprite, "LASTROW", row)
    if (sprites.readDataString(mySprite, "DIRECTION") == "vertical cima") {
        mySprite.y = row * 16 + 16
    } else if (sprites.readDataString(mySprite, "DIRECTION") == "vertical baixo") {
        mySprite.y = row * 16 + 0
    } else if (sprites.readDataString(mySprite, "DIRECTION") == "horizontal esquerda") {
        mySprite.x = col * 16 + 16
    } else {
        mySprite.x = col * 16 + 0
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    holdingCar = getCarWeAreOverlappingWith()
    if (holdingCar) {
        setNotWallInCarLocation(holdingCar)
        controller.moveSprite(hand, 0, 0)
        hand.setImage(assets.image`handClosed`)
        sprites.setDataNumber(holdingCar, "lastPosX", holdingCar.x)
        sprites.setDataNumber(holdingCar, "lastPosY", holdingCar.y)
    }
})
function defineCorrectImage (direction: string, car: Sprite) {
    sprites.setDataString(car, "DIRECTION", direction)
    car.setImage(sprites.readDataImage(car, "horizontalImage"))
    if (direction == "horizontal esquerda") {
        car.image.flipX()
    } else if (direction == "vertical baixo") {
        car.setImage(sprites.readDataImage(car, "verticalImage"))
    } else if (direction == "vertical cima") {
        car.setImage(sprites.readDataImage(car, "verticalImage"))
        car.image.flipY()
    }
    car.setFlag(SpriteFlag.Ghost, false)
    car.setFlag(SpriteFlag.Invisible, false)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (holdingCar && sprites.readDataString(holdingCar, "DIRECTION").includes("horizontal")) {
        if (!(tiles.tileAtLocationIsWall(tiles.locationInDirection(tiles.locationOfSprite(holdingCar), CollisionDirection.Left)))) {
            tiles.placeOnTile(hand, tiles.locationInDirection(tiles.locationOfSprite(holdingCar), CollisionDirection.Left))
            hand.x += -8
        }
    }
})
function createCar (image2: Image, width: number, id: string, verticalImage: Image) {
    tempCar = sprites.create(image2, SpriteKind.Car)
    sprites.setDataString(tempCar, "ID", id)
    sprites.setDataString(tempCar, "DIRECTION", "horizontal direita")
    sprites.setDataNumber(tempCar, "WIDTH", width)
    sprites.setDataImageValue(tempCar, "verticalImage", verticalImage)
    sprites.setDataImageValue(tempCar, "horizontalImage", image2)
    return tempCar
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (holdingCar && sprites.readDataString(holdingCar, "DIRECTION").includes("horizontal")) {
        if (!(tiles.tileAtLocationIsWall(tiles.locationInDirection(tiles.locationOfSprite(holdingCar), CollisionDirection.Right)))) {
            tiles.placeOnTile(hand, tiles.locationInDirection(tiles.locationOfSprite(holdingCar), CollisionDirection.Right))
            hand.x += -8
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (holdingCar) {
        hand.setImage(assets.image`handOpened`)
        controller.moveSprite(hand, 100, 100)
        setWallInCarLocation(holdingCar)
        holdingCar = sprites.readDataSprite(hand, "undefined")
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (holdingCar && sprites.readDataString(holdingCar, "DIRECTION").includes("vertical")) {
        if (!(tiles.tileAtLocationIsWall(tiles.locationInDirection(tiles.locationOfSprite(holdingCar), CollisionDirection.Bottom)))) {
            tiles.placeOnTile(hand, tiles.locationInDirection(tiles.locationOfSprite(holdingCar), CollisionDirection.Bottom))
            hand.y += -8
        }
    }
})
function getCarWeAreOverlappingWith () {
    for (let value of sprites.allOfKind(SpriteKind.Car)) {
        if (value.overlapsWith(targetSprite)) {
            return value
        }
    }
    return sprites.readDataSprite(hand, "undefined")
}
function setNotWallInCarLocation (carSprite: Sprite) {
    if (carSprite.width >= 32) {
        tempCarWidth = sprites.readDataNumber(carSprite, "WIDTH") - 1
        for (let index = 0; index <= tempCarWidth; index++) {
            tiles.setWallAt(tiles.getTileLocation(carSprite.tilemapLocation().column + (index - 1), carSprite.tilemapLocation().row), false)
        }
    } else if (carSprite.height >= 32) {
        tempCarWidth = sprites.readDataNumber(carSprite, "WIDTH") - 1
        for (let index = 0; index <= tempCarWidth; index++) {
            tiles.setWallAt(tiles.getTileLocation(carSprite.tilemapLocation().column, carSprite.tilemapLocation().row + (index - 1)), false)
        }
    }
}
let tempCar: Sprite = null
let tempCars: Sprite[] = []
let tempCarWidth = 0
let targetSprite: Sprite = null
let holdingCar: Sprite = null
let cars: Sprite[] = []
let hand: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`transito`)
hand = sprites.create(assets.image`handOpened`, SpriteKind.Player)
controller.moveSprite(hand)
hand.z += 100
hand.setStayInScreen(true)
hand.setFlag(SpriteFlag.GhostThroughWalls, true)
cars = createCars()
let cards = 0
hideCars()
holdingCar = sprites.readDataSprite(hand, "undefined")
targetSprite = sprites.create(assets.image`target`, SpriteKind.Target)
defineCorrectImage("horizontal direita", cars[findCarById("A")])
positionSpriteInTileMap(cars[findCarById("A")], 4, 4)
setWallInCarLocation(cars[findCarById("A")])
defineCorrectImage("vertical baixo", cars[findCarById("B")])
positionSpriteInTileMap(cars[findCarById("B")], 2, 2)
setWallInCarLocation(cars[findCarById("B")])
game.onUpdate(function () {
    targetSprite.setPosition(hand.left + 6, hand.top + 8)
})
game.onUpdate(function () {
    if (holdingCar) {
        holdingCar.setPosition(hand.x, hand.y)
    }
})
