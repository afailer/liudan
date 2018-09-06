/**
 * Created by pangda on 2018/8/28.
 */
class BaseBullet{
  constructor(){
    this.bullet = document.createElement('img');
    this.speed = 15;
    this.power = 1;
  }
}

BaseBullet.prototype.fire = function (plain) {
  this.bullet.style.top = plain.offsetTop +'px';
  this.bullet.style.left = plain.offsetLeft + plain.offsetWidth/2 + 'px';
  main.append($(this.bullet));
  this.fly = setInterval(function () {
    this.bullet.style.top = this.bullet.offsetTop - this.speed + 'px'
    if(this.bullet.offsetTop < 0){
      clearInterval(this.fly);
      this.bullet.remove();
      return;
    }
    if(EnemyManager().isHit(this)){
      if(this.power === 1 || this.power < 1){
        this.bullet.remove();
      }
      if(this.power > 1 && this.power < 5){
        this.power = this.power - 2;
      }
    }
  }.bind(this), 30)
}

class CommonBullet extends BaseBullet{
  constructor(){
    super()
    this.bullet.className = 'bullet';
  }
}
class SuperBullet extends BaseBullet{
  constructor(){
    super();
    this.bullet.className = 'supperBullet';
    this.power = 1000;
  }
}