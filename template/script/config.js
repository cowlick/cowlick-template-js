var core = require("cowlick-core");

var size = 18;

module.exports = {
  window: {
    message: {
      layer: {
        name: core.Layer.message,
        x: 10,
        y: 10
      },
      width: g.game.width - 20,
      height: g.game.height - 20,
      touchable: true
    },
    system: []
  },
  font: {
    list: [
      new g.DynamicFont({
        game: g.game,
        fontFamily: g.FontFamily.SansSerif,
        size
      })
    ],
    color: "black",
    alreadyReadColor: "#4444FF",
    size
  },
  system: {
    maxSaveCount: 100,
    messageSpeed: 1000 / g.game.fps,
    autoMessageDuration: 1500,
    alreadyRead: false,
    realTimeDisplay: false
  },
  audio: {
    voice: 0.5,
    se: 0.5,
    bgm: 0.5
  }
};
