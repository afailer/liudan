/**
 * Created by pangda on 2018/9/1.
 */
class BasePlain(){
  constructor(){
    this.plain = document.getElementById('plain').cloneNode(true);
    this.speed = 5;
    this.bomIndex = 0;
    this.bomImg = ['images/die1.png','images/die2.png']
    this.lifeVal = 10;
    this.plain.style.left = getRand(0, main[0].offsetWidth - 100);
  }
}
BasePlain.prototype.over = function () {
  clearInterval(this.fly);
  EnemyManager().remove(this)
  if(this.lifeVal <= 0){

  }
}
BasePlain.prototype.move = function () {
  this.fly = setInterval(function () {
    this.plain.style.top = this.plain.offsetTop + this.speed
    if(this.plain.offsetTop + this.plain.offsetHeight > main.offsetHeight){
      this.over();
    }
  }.bind(this), 30)
}