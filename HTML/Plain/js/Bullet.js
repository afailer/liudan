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

BaseBullet.prototype.fire = function (plain, left) {
  this.bullet.style.top = plain.offsetTop +'px';
  if(left){
    this.bullet.style.left = left + 'px';
  }else{
    this.bullet.style.left = plain.offsetLeft + plain.offsetWidth/2 + 'px';
  }
  main.append($(this.bullet));
  this.fly = setInterval(function () {
    this.bullet.style.top = this.bullet.offsetTop - this.speed + 'px'
    if(this.bullet.offsetTop < 0){
      clearInterval(this.fly);

      this.bomb();
      return;
    }
    if(EnemyManager().isHit(this.bullet)){
      if(this.power === 1 || this.power < 1){
        this.bomb();
      }
      if(this.power > 1 && this.power < 5){
        this.power = this.power - 2;
      }
    }
  }.bind(this), 30)
}
BaseBullet.prototype.bomb = function () {
  const imgs = ['../images/die1.png', '../images/die2.png'];
  let index = 0
  let that = this;
  let bom = () => {
    that.bullet.style.backgroundImage = url(imgs[index]);
    index++;
    if(index <= imgs.length - 1){
      setTimeout(bom(),2000);
    }else {
      that.bullet.remove();
    }
  }
  bom();

};

class CommonBullet extends BaseBullet{
  constructor(){
    super()
    this.bullet.className = 'bullet';
  }
}
class SuperBullet extends BaseBullet{
  constructor(){
    super();
    this.bullet.className = 'superbullet';
    this.power = 1000;
  }
}