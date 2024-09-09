let compArr=[];
let userArr=[];
let Level=0;
let started=false;
let HighScore=0;
let hg=0;

btnArr=["red","green","blue","orange"];

h2=document.querySelector("h2");
h3=document.querySelector("h3");
h3.innerText=`HighScore: ${HighScore}`;

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
})
function gameFlash(btn){
btn.classList.add("flash");

setTimeout(function(){
    btn.classList.remove("flash")
},250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
    }

function levelup(){
    userArr=[];
    Level++;
    
   
    h2.innerText=`Level ${Level}`;

    let btnNo=Math.floor(Math.random()*3);
    let btncolor=btnArr[btnNo];
    let fbtn=document.querySelector(`.${btncolor}`);
    compArr.push(btncolor);
    console.log(compArr); 

    gameFlash(fbtn);
 
}
function checkAnswer(idx){
    
    if(userArr[idx] === compArr[idx]){
        if(userArr.length==compArr.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`<b>Game Over!</b> <br> Your score is : ${Level} <br>Press any key to start a new game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },500);
        reset();
    }
}


function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userArr.push(userColor);
    console.log(userArr);

    checkAnswer(userArr.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    if(Level>HighScore)
        {
           HighScore=Level;
        }
        h3.innerText=`HighScore: ${HighScore}`;

    started=false;
    compArr=[];
     userArr=[];
     Level=0;
    
    
   
   

}