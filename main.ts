namespace SpriteKind {
    export const Bulletammo = SpriteKind.create()
    export const Powerupp = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    Xdir = 0
    Ydir = -165
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Powerupp, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    mySprite.sayText("All spawned zombies have been destroyed  ", 2000, true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Bullet = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, Xdir, Ydir)
    Bullet.setKind(SpriteKind.Bulletammo)
    pause(417)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
    Xdir = -165
    Ydir = 0
})
info.onScore(100, function () {
    if (true) {
        mySprite.sayText(" Your bullet speed went up but so did the zombie's and a powerup has spawned somewhere in the map new objective reach score 150")
        Ydir = 300
        Ydir = -300
        Xdir = 300
        Xdir = -300
        Zombies.follow(mySprite, 41)
        Mega_star = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 2 c . . . . . . 
            . . . . . . c d 2 d c . . . . . 
            . . . b c c d 2 2 2 d c c b . . 
            . . b d d 9 9 9 f 7 7 7 d d b . 
            . . . b c c d 9 5 7 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Powerupp)
        tiles.placeOnRandomTile(Mega_star, sprites.dungeon.floorLight2)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
    Xdir = 165
    Ydir = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Bulletammo, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(Bullet)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    Xdir = 0
    Ydir = 165
})
info.onScore(150, function () {
    mySprite.sayText(" Your bullet speed went up but so did the zombie's new objective reach score 150")
    Ydir = 500
    Ydir = -500
    Xdir = 500
    Xdir = -500
    Zombies.follow(mySprite, 52)
})
info.onScore(50, function () {
    if (true) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        mySprite.sayText("Your bullet speed went up! New objective reach score 100")
        Ydir = 210
        Ydir = -210
        Xdir = 210
        Xdir = -210
    } else {
    	
    }
})
info.onScore(200, function () {
    mySprite.sayText(" Your bullet speed went up ! But the boss has appeared if u touch it game over!, the zombie's speed lowered .new objective kiill boss")
    Ydir = 500
    Ydir = -500
    Xdir = 500
    Xdir = -500
    sprites.destroy(Zombies)
    Zombies.follow(mySprite, 27)
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb7777ff........
        ......fb7777777bf.......
        ......f777777777f.......
        .....ffff7777777df......
        ....fb777c7dd777df......
        ....ffb7b7fdcf77bf......
        .....ffbfbfb77777f......
        ......ffffcfdb7b7f......
        .......fcccfcfbfbf......
        ........f7ffffffff......
        .........f777f7.........
        .........fff77f.........
        .....7..ff777ff.........
        .....fff77ff7f..........
        ......f7ff777...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    enemyhelath = 10
    myEnemy.setPosition(5, 1)
    myEnemy.follow(mySprite, 28)
    Mega_star = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . . . c d 2 d c . . . . . 
        . . . b c c d 2 2 2 d c c b . . 
        . . b d d 9 9 9 f 7 7 7 d d b . 
        . . . b c c d 9 5 7 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Powerupp)
    tiles.placeOnRandomTile(Mega_star, sprites.dungeon.floorLight2)
    if (enemyhelath <= 1) {
        sprites.destroy(myEnemy)
        game.gameOver(true)
        game.setGameOverMessage(true, "game over u killed the boss")
    }
})
sprites.onOverlap(SpriteKind.Bulletammo, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(Bullet)
    enemyhelath += -1
    myEnemy.sayText(enemyhelath, 3300, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let enemyhelath = 0
let myEnemy: Sprite = null
let Mega_star: Sprite = null
let Zombies: Sprite = null
let Bullet: Sprite = null
let Ydir = 0
let Xdir = 0
let mySprite: Sprite = null
game.showLongText("Tutorial press A to fire the bullet goes in the direction u face u might wanna pay attention to the text bubble from the charecter move joystick to play", DialogLayout.Full)
info.setLife(25)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
mySprite.sayText("Objective- reach score 50")
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
game.onUpdateInterval(390, function () {
    Zombies = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 6 6 e f f . . 
        . . f e 7 7 f 1 4 7 6 e e f . . 
        . . . f 7 7 7 7 4 e e e f . . . 
        . . . f e 6 6 6 e 7 7 4 . . . . 
        . . . f 2 2 2 2 e 7 7 e . . . . 
        . . f f 8 8 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `, randint(15, 10), randint(-16, 10))
    Zombies.follow(mySprite, 20)
})
