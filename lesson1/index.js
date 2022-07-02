//変数
let unko = 'Hello world!';

//定数
const bibunko = 'He Hello';

//配列
let inoki = ['いち','に－','さん'];

//ループ文
// let index = 0;
// while(index < inoki.length){
//   //繰り返したい命令
//   console.log(inoki[index]);
//   index++;
// }

//条件式
// if(inoki.length > 3){
//   console.log('ボンバイエ')
// }else{
//   console.log('でない')
// }

//関数
const test = (arg) =>{
  //ここに実行したい命令を書く
  if(inoki.length > arg){
    console.log('ボンバイエ')
  }else{
    console.log('でない')
  }
};

//test(3);

//オブジェクト
const unko2 = {
  color:'pink',
  size:'large',
  perfume:'mint',
  gotilet: ()=> {
    console.log('Hello world!');
  }

};

//console.log(unko2.gotilet());

//window オブジェクト
//console.log(window.innerHeight);
//window.alert('Hello world');

//Document オブジェクト
//console.log(document);
//console.log(document.getElementsByTagName('button')[0]);

//Event
document.getElementsByTagName('button')[0].addEventListener('click',()=>{
  window.alert('Hello world')
});

//console.log(unko);
//console.log(bibunko);
//console.log(inoki[1]);