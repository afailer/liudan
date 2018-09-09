/**
 * Created by pangda on 2018/8/26.
 */
var options = null;
var main = null;
window.onload = function () {
  options = $('#options').children();
  main = $('#main');
  DataManager().init();
}
function DataManager() {
  if(DataManager.instance === undefined){
    DataManager.instance = {
      level: 1,
      init: function () {
        var fn = function (l) {
          return function () {
            $('#options').css('display','none');
            this.level = l;
            MeManager().init();
            EnemyManager().init();
          }
        };
        for(var l = 0; l<options.length; l++){
          options[l].onclick = fn(l);
        }
      }
    }
  }
  return DataManager.instance;
}

function MeManager() {
  if(MeManager.instance === undefined){
    MeManager.instance = {
      init: function () {
        MyPlain().start();
      }
    }
  }
  return MeManager.instance;
}
function EnemyManager() {
  if(EnemyManager.instance === undefined){
    EnemyManager.instance = {
      livingEnemies: [],
      isHit: function (bullet) {
        for (let l = 0;l < this.livingEnemies.length; l++){
          if(pz(this.livingEnemies[l].plain, bullet)){
            this.livingEnemies[l].hitted();
            return true;
          }
        }
        return false;
      },
      init: function () {
        setInterval(function () {
          const type = getRand(1,10);
          let enemy = undefined;
          if(type < 7){
            enemy = new CommonEnemy();
          }else{
            enemy = new BigEnemy();
          }
          this.livingEnemies.push(enemy);
        }.bind(this),1000)
      },
      remove: function (enemy) {
        this.livingEnemies.splice(this.livingEnemies.indexOf(enemy),1);
      }
    }
  }
  return EnemyManager.instance
}