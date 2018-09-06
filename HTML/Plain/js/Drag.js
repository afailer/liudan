/**
 * elementsObj是一个jQuery对象
 * {
 *    parent: 容器,
 *    obj: 孩子对象
 * }
 */
function Drag(){
  this.init = function(elementsObj){
    this.eles = elementsObj;
    this.obj = this.eles.obj;
    this.maxWidth = this.eles.parent.width() - this.eles.obj.width();
    this.maxHeight = this.eles.parent.height() - this.eles.obj.height();
    this.obj.mousedown(this.down)
  }
  this.down = function(e){
    this.disX = e.pageX - this.obj.position().left;
    this.disY = e.pageY - this.obj.position().top;
    document.onmousemove = this.move;
    document.onmouseup = this.up;
  }.bind(this)
  this.move = function(e) {
    let left = e.pageX - this.disX;
    let top = e.pageY - this.disY;
    if(left > this.maxWidth){
      left = this.maxWidth
    }
    if(left < 0){
      left =0
    }
    if(top < 0){
      top = 0;
    }
    if(top> this.maxHeight){
      top = this.maxHeight
    }
    this.obj.css("left",left);
    this.obj.css('top',top);
  }.bind(this)
  this.up = function(e) {
    document.onmousemove = ''
    document. onmouseup = ''
  }
}
