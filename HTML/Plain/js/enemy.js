/**
 * Created by pangda on 2018/9/1.
 */
class BasePlain {
  constructor() {
    this.plain = document.getElementById('plain').cloneNode(true);
    this.speed = 5;
    this.lifeVal = 1;
    this.plain.style.left = getRand(0, main.width()-100)+'px';
    main.append(this.plain);
    this.move();
  }
}
BasePlain.prototype.hitted = function () {
  this.lifeVal = this.lifeVal - 1;
  if(this.lifeVal <= 0){
    this.over();
  }
};
BasePlain.prototype.over = function () {
  clearInterval(this.fly);
  this.plain.remove();
  EnemyManager().remove(this)
}
BasePlain.prototype.move = function () {
  this.fly = setInterval(function () {
    this.plain.style.top = (this.plain.offsetTop + this.speed) +'px'
    if(this.plain.offsetTop + this.plain.offsetHeight > main.height()){
      this.over();
    }
  }.bind(this), 30)
}

class CommonEnemy extends BasePlain {
  constructor() {
    super();
    this.plain.className = 'enemy-small';
  }
}

class BigEnemy extends BasePlain {
  constructor() {
    super();
    this.plain.className = 'enemy-large';
    this.speed = 3;
    this.lifeVal =3
  }
}