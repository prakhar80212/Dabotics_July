const answer = document.getElementById("result");
 const btn = document.querySelectorAll(".btn");
 for(item of btn){
 item.addEventListener("click",(e)=>{
    btn_text= e.target.innerText;
    if(btn_text=="x"){
        btn_text="*";
    }
    if(btn_text=="÷"){
        btn_text="/";
    }
 
   answer.value+=btn_text;
 });
}
function calculate(){
    try{
        answer.value=eval(answer.value);
    }
    catch(error){
        alert("ERROR");
    }
}
function allClear(){
    answer.value="";
}
function deleteLast(){
    answer.value=answer.value.slice(0,-1);
}
function Pow(){
    answer.value=Math.pow(answer.value,2);
}
function sin(){
    answer.value=Math.sin(answer.value);
}
function cos(){
    answer.value=Math.cos(answer.value);
}
function tan(){
    answer.value=Math.tan(answer.value);
}
function log(){
    answer.value=Math.log(answer.value);
}
function pi(){
    answer.value=Math.PI;
}
function exp(){
    answer.value=Math.exp(answer.value);
}
function fact(){
    var i,num,f=1;
    num=answer.value;
    for(i=1;i<=num;i++){
        f=f*i;
    }
    answer.value=f;
}
function sqrt(){
    answer.value=Math.sqrt(answer.value);
}