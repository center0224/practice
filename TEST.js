//STARTボタンをクリックした時の処理
//ボタン１～５にランダムに背景色をつける
//青：40　緑：30　赤：20　金：10
function btn_startClick(){
 var color
 //ボタン１
 color = colorDecision();
 btn1.style.backgroundColor = color;
 //ボタン２
 color = colorDecision();
 btn2.style.backgroundColor = color;
 //ボタン３
 color = colorDecision();
 btn3.style.backgroundColor = color;
 //ボタン４
 color = colorDecision();
 btn4.style.backgroundColor = color;
 //ボタン５
 color = colorDecision();
 btn5.style.backgroundColor = color;
 
 var doc = document.getElementById("btn_parent_1");  
 var str = "１～５のボタンを"+"<br>"+"押してください。"
 doc.innerHTML= str; 
}

//ボタン１クリック
function btn1_Click(){
 var result
 result = resultDecision();
 btn1.value = result;
}

//ボタン２クリック
function btn2_Click(){
 var result
 result = resultDecision();
 btn2.value = result;
}

//ボタン３クリック
function btn3_Click(){
 var result
 result = resultDecision();
 btn3.value = result;
}

//ボタン４クリック
function btn4_Click(){
 var result
 result = resultDecision();
 btn4.value = result;
}

//ボタン５クリック
function btn5_Click(){
 var result
 result = resultDecision();
 btn5.value = result;
}

//RESETボタンをクリックした時の処理
//ボタン１～５の背景色をリセット(白)
function btn_resetClick(){
 btn1.style.backgroundColor = "white";
 btn2.style.backgroundColor = "white";
 btn3.style.backgroundColor = "white";
 btn4.style.backgroundColor = "white";
 btn5.style.backgroundColor = "white";
 btn5.disabled = false;
 var doc = document.getElementById("btn_parent_1");  
 var str = "STARTボタンを" + "<br>" + "押してください"
 doc.innerHTML= str; 
}

//色抽選
function colorDecision(){
 var color
 var random = Math.floor(Math.random() * 10); //0～9を返す 
 switch (random){
　　//金
  case 0:
　　color = "gold";
　　break;
　　//赤
  case 1:
  case 2:
　　color = "red";
　　break;
　　//緑
  case 3:
  case 4:
  case 5:
　　color = "green";
　　break;
　　//青
  case 6:
  case 7:
  case 8:
  case 9:
　　color = "blue";
　　break;
  default:
  }
 return color;
}

//当否抽選
function resultDecision(){
 var result
 var random = Math.floor(Math.random() * 10); //0～9を返す 
 switch (random){
　　//あたり
  case 0:
　case 1:
  case 2:
  case 3:
　case 4:
　　result = "あたり";
　　break;
　　//はずれ
  case 5:
  case 6:
　case 7:
  case 8:
  case 9:
　　result = "はずれ";
　　break;
  default:
  }
 return result;
}