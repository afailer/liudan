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
          }
        }
      },
      fire: function (kind) {
        if(kind === 'common'){
          console.log(this.me.offsetTop)
          new CommonBullet().fire(this.me)
        }else if(kind === 'super'){
          new SuperBullet().fire(this.me)
        }
      }
    }
  }
  return MyPlain.instance
}