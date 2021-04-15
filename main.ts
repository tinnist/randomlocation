controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite2.setPosition(randint(15, 145), randint(15, 105))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(randint(15, 145), randint(15, 105))
})
let sprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . 3 . . 3 . . . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . . 3 . . . . 
    . . . 3 3 3 . . . . . 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . . 3 3 . . . 
    . . . . . . . . . . . . 3 . . . 
    `, SpriteKind.Player)
mySprite.setPosition(randint(15, 145), randint(15, 105))
sprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 . . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . 5 5 . . . . . . 
    . . . . . . . . . 5 . . . . . . 
    . . . . . . . . . . 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
