controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let mySprite = sprites.create(img`
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . e e e d d f d . . . . . . 
    . . e d e d d d f d d d . . . . 
    . . e d e e d d d f d d d . . . 
    . . e e d d d d f f f f . . . . 
    . . . . d d d d d d d . . . . . 
    . . . 2 2 8 2 2 2 . . . . . . . 
    . . 2 2 2 8 2 2 8 2 2 2 . . . . 
    . 2 2 2 2 8 8 8 8 2 2 2 2 . . . 
    . d d 2 8 5 8 8 5 8 2 d d . . . 
    . d d d 8 8 8 8 8 8 d d d . . . 
    . d d 8 8 8 8 8 8 8 8 d d . . . 
    . . . 8 8 8 . . 8 8 8 . . . . . 
    . . e e e . . . . e e e . . . . 
    . e e e e . . . . e e e e . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`SpawnBlock`)
mySprite.y += -16
game.onUpdate(function () {
    scene.centerCameraAt(mySprite.x, mySprite.y - 30)
})
