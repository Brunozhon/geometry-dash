var geometryDash = {
  canvas: document.createElement("canvas"),
  ctx: null,
  player: null,
  Player: function(name, color, x, y) {
    this.name = name
    this.color = color
    this.x = x
    this.y = y
  },
  init: function() {
    document.body.append(this.canvas)
    this.ctx = this.canvas.getContext("2d")
  },
  start: function() {
    this.player = new this.Player("Geometry Dash Player", "green", 0, 0)
  }
}
