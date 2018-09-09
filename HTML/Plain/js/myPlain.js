/**
 * Created by pangda on 2018/8/26.
 */
function MyPlain() {
  if(MyPlain.instance === undefined){
    MyPlain.instance = {
      me: document.createElement('img'),
      start: function () {
        this.me.className = 'my-warplain';
        this.me.setAttribute('id', 'myPlain')
        main.append(this.me)
        this.me.style.top = (main.height() -130)+'px'
        this.me.style.left = (main.width()/2 - this.me.offsetWidth/2) + 'px';

        new Drag().init({
          parent: main,
          obj: $("#myPlain")
        })
        document.onkeydown = (e) => {
          switch (e.keyCode){
            case 48:
              this.fire('common')
              break;
            case 57:
              this.fire('super')
              break;
            case 56:
              this.fire('5c')
          }
        }
      },
      fire: function (kind) {
        if(kind === 'common'){
          console.log(this.me.offsetTop)
          new CommonBullet().fire(this.me)
        }else if(kind === 'super'){
          console.log('--super--')
          new SuperBullet().fire(this.me)
        }else if(kind === '5c'){
          for(let l=1; l<6; l++){
            let left = main.width()/6;
            left = left*l;
            new CommonBullet().fire(this.me, left);
          }
        }
      }
    }
  }
  return MyPlain.instance
}