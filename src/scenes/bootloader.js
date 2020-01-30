class Bootloader extends Phaser.Scene {
  constructor() {
    super({
      key: "Bootloader"
    });
  }

  // Aquí va el preload
  preload() {
    this.load.image("bg", "/assets/Background.png");
    this.load.spritesheet("player", "/assets/player.png", {
      frameWidth: 32,
      frameHeight: 32
    });
  }

  // Aquí va el create
  create() {
    this.physics.world.setBoundsCollision(true, true, true, true);
    this.add.image(130, 110, "bg");
    this.player = this.physics.add.sprite(100, 206, "player", 0);

    this.player.setCollideWorldBounds(true);

    // Animaciones

    this.anims.create({
      key: "ilde",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 2
      }),
      repeat: -1,
      frameRate: 8
    });

    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("player", {
        start: 3,
        end: 6
      }),
      repeat: -1,
      frameRate: 10
    });

    this.anims.create({
      key: "jump",
      frames: this.anims.generateFrameNumbers("player", {
        start: 7,
        end: 9
      }),
      repeat: 0,
      frameRate: 8
    });

    this.anims.create({
      key: "fire",
      frames: this.anims.generateFrameNumbers("player", {
        start: 10,
        end: 11
      }),
      repeat: -1,
      frameRate: 8
    });

    this.anims.create({
      key: "dash",
      frames: this.anims.generateFrameNumbers("player", {
        start: 12,
        end: 13
      }),
      repeat: -1,
      frameRate: 8
    });

    this.anims.create({
      key: "death",
      frames: this.anims.generateFrameNumbers("player", {
        start: 13,
        end: 14
      }),
      repeat: -1,
      frameRate: 8
    });

    // Aquí se ejecutan
    this.player.anims.play("ilde");

    // Controles

    this.cursor = this.input.keyboard.createCursorKeys();

    this.cursor_W = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.W
    );
    this.cursor_S = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );
    this.cursor_A = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    );
    this.cursor_D = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    );
    this.cursor_L = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.L
    );
    this.cursor_M = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.M
    );

    this.cursor_C = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.C
    );
  }

  // Aquí va el update
  update() {
    const velocity = 199;
    const altJump = 200;


    this.player.setVelocityX(0);

    // A hacer Magia

    if (this.cursor_D.isDown) {
      this.player.setVelocityX(velocity);
      this.player.flipX = false;
    }

    if (this.cursor_A.isDown) {
      this.player.body.setVelocityX(-velocity);
      this.player.flipX = true;
    }

    if (this.cursor_W.isDown && this.player.body.onFloor()) {
      this.player.body.setVelocityY(-altJump);
    }



    if (this.cursor_M.isDown) {
      this.player.x++;
      this.player.flipX = false;
    }

    if (
      (this.cursor_A.isDown || this.cursor_D.isDown) &&
      this.player.body.onFloor()
    ) {
      this.player.anims.play("walk", true);
    } else if (!this.player.body.onFloor()) {
      this.player.anims.play("jump", true);
    } else {
      this.player.anims.play("ilde", true);
    }
    if (this.cursor_L.isDown) {
      this.player.anims.play("fire", true);
    }

    if (this.cursor_M.isDown &&
      this.player.body.onFloor()) {
      this.player.anims.play("dash", true);
    }
    if (this.cursor_C.isDown) {
      this.player.anims.play("death", true);
    }
  }


}

export default Bootloader;