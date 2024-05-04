// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile19 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile21 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transito":
            case "level2":return tiles.createTilemap(hex`0a00080001090606060606060a0103040202020202020803010402020202020208010304020202020202050d010402020202020208010304020202020202080301040202020202020801030c0707070707070b03`, img`
. 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . 2 . 
. 2 . . . . . . 2 . 
. 2 . . . . . . . . 
. 2 . . . . . . 2 . 
. 2 . . . . . . 2 . 
. 2 . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile21], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile15":
            case "tile17":return tile17;
            case "myTile16":
            case "tile18":return tile18;
            case "myTile17":
            case "tile19":return tile19;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile19":
            case "tile21":return tile21;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
