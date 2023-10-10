const buttons = document.getElementsByTagName("button");
const input1=document.querySelector(".input");
let result = [];
for(let i=0;i<buttons.length;i++){
if(buttons[i].innerHTML!=="DEL" && buttons[i].innerHTML!=="RESET" && buttons[i].innerHTML!=="=" ){

  result.push(buttons[i]);
}
}

console.log(result)
let result2="";
for(let i=0;i<result.length;i++){
  const input1=document.querySelector(".input");

  result[i].addEventListener("click",()=>{
    result2+=result[i].innerHTML;
    console.log(result2);
input1.innerTEXT=result2;

    inputval(result2);

    document.querySelector(".btndel").addEventListener("click",()=>{
      result2="";
      input1.innerHTML="";
      })

      document.querySelector(".btnequal").addEventListener("click",()=>{
        result2=eval(result2);
        input1.innerHTML=eval(result2);

      })

      document.querySelector(".btnreset").addEventListener("click",()=>{
        result2="";
      input1.innerHTML="";

      })
  })
}


function inputval(val){
   input1.innerHTML=val
}
let val="";
function calculate(val){
  console.log(val);
   input1.innerHTML=eval(val);
}


const valor = eval(3+4+5);
console.log(valor);


//them1
document.querySelector(".aqua").addEventListener("click",()=>{
  document.querySelector(".buttons").style.background="hsl(30, 25%, 89%)";
  document.querySelector(".input").style.background="white";
  document.querySelector(".input").style.color="black";
 
  document.querySelector("body").style.background=" hsl(222, 26%, 31%)";
})


// them2

document.querySelector(".brown").addEventListener("click",()=>{
  document.querySelector(".buttons").style.background="rgb(30, 30, 88)";
  document.querySelector(".input").style.background="rgb(3, 3, 31)";
  document.querySelector(".input").style.color="white";
 
  document.querySelector("body").style.background="rgb(4, 24, 79)";
})
//them3
document.querySelector(".blue").addEventListener("click",()=>{
  document.querySelector(".buttons").style.background="rgb(68, 5, 128)";
  document.querySelector(".input").style.color="rgb(229, 229, 25)";
  document.querySelector(".input").style.background="rgb(68, 5, 128)";
  document.querySelector("body").style.background="rgb(26, 8, 42)";
  
})  