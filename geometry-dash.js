var geometryDash = {
  canvas: document.createElement("canvas"),
  ctx: null,
  init: function() {
    document.body.append(this.canvas)
    this.ctx = this.canvas.getContext("2d")
  },
  start: function() {
    
  }
}
