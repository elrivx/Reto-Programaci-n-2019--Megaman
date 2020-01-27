import Bootloader from './bootloader.js';
import Scene_play from './scene_play.js';

const config = {
  width: 256,
  height: 224,
  parent: "contenedor",
  pixelArt: true,
  zoom: 2,
  title: 'MegaLars',
  backgroundColor: '#17191b',
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 500
      },
    }



  },
  scene: [
    Bootloader,
    Scene_play
  ]
}

new Phaser.Game(config);