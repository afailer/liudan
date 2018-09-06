/**
 * Created by pangda on 2018/8/28.
 */
//碰撞检测
function pz(obj1,obj2){
  var L1 = obj1.offsetLeft;
  var R1 = obj1.offsetLeft + obj1.offsetWidth;
  var T1 = obj1.offsetTop;
  var B1 = obj1.offsetTop + obj1.offsetHeight;

  var L2 = obj2.offsetLeft;
  var R2 = obj2.offsetLeft + obj2.offsetWidth;
  var T2 = obj2.offsetTop;
  var B2 = obj2.offsetTop + obj2.offsetHeight;

  if( R1 < L2  ||  L1>R2 ||  B1<T2 || T1 >B2 ){ //　碰不上
    return false;
  }else{
    return true;
  }
}

//获取任意区间值函数
function getRand(min,max){
  return Math.round( Math.random()*(max-min) + min );
}