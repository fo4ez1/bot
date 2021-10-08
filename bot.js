let phrases = [
  "Да",
  "Нет",
  "Возможно да",
  "Возможно нет",
  "50 на 50"
];
let a = prompt("Передайте боту привет");
alert("Hello");
let n;
label:
while(true){
    let a1 = prompt("задайте вопрос на который он сможет ответ Да/нет , если хотите закончить разговор скажите -пока"); 
       if (a1 == "пока"){
alert("Досвидание")
break label; 
       }
        
  let rand =Math.floor(Math.random()*phrases.length);
  if(n=="привет"){
    alert("Здраствуйте");
  }
  else{
    alert(phrases[rand])
  }
}
