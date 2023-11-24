
const backGround=document.querySelector(".background");
const keyBoard=document.querySelector(".keyboard");
const keys=document.querySelectorAll(".key");
const displayBoard=document.querySelector(".display-board");

const keyOne=document.querySelector(".key--1");
const keyTwo=document.querySelector(".key--2");
const keyThree=document.querySelector(".key--3");
const keyFour=document.querySelector(".key--4");
const keyFive=document.querySelector(".key--5");
const keySix=document.querySelector(".key--6");
const keySeven=document.querySelector(".key--7");
const keyEight=document.querySelector(".key--8");
const keyNine=document.querySelector(".key--9");
const keyZero=document.querySelector(".key--0");

const keyq=document.querySelector(".key--q");
const keyw=document.querySelector(".key--w");
const keye=document.querySelector(".key--e");
const keyr=document.querySelector(".key--r");
const keyt=document.querySelector(".key--t");
const keyy=document.querySelector(".key--y");
const keyu=document.querySelector(".key--u");
const keyi=document.querySelector(".key--i");
const keyo=document.querySelector(".key--o");
const keyp=document.querySelector(".key--p");
const keya=document.querySelector(".key--a");
const Keys=document.querySelector(".key--s");
const keyd=document.querySelector(".key--d");
const keyf=document.querySelector(".key--f");
const keyg=document.querySelector(".key--g");
const keyh=document.querySelector(".key--h");
const keyj=document.querySelector(".key--j");
const keyk=document.querySelector(".key--k");
const keyl=document.querySelector(".key--l");
const keyz=document.querySelector(".key--z");
const keyx=document.querySelector(".key--x");
const keyc=document.querySelector(".key--c");
const keyv=document.querySelector(".key--v");
const keyb=document.querySelector(".key--b");
const keyn=document.querySelector(".key--n");
const keym=document.querySelector(".key--m");

const keyQ=document.querySelector(".key--Q");
const keyW=document.querySelector(".key--W");
const keyE=document.querySelector(".key--E");
const keyR=document.querySelector(".key--R");
const keyT=document.querySelector(".key--T");
const keyY=document.querySelector(".key--Y");
const keyU=document.querySelector(".key--U");
const keyI=document.querySelector(".key--I");
const keyO=document.querySelector(".key--O");
const keyP=document.querySelector(".key--P");
const keyA=document.querySelector(".key--A");
const keyS=document.querySelector(".key--S");
const keyD=document.querySelector(".key--D");
const keyF=document.querySelector(".key--F");
const keyG=document.querySelector(".key--G");
const keyH=document.querySelector(".key--H");
const keyJ=document.querySelector(".key--J");
const keyK=document.querySelector(".key--K");
const keyL=document.querySelector(".key--L");
const keyZ=document.querySelector(".key--Z");
const keyX=document.querySelector(".key--X");
const keyC=document.querySelector(".key--C");
const keyV=document.querySelector(".key--V");
const keyB=document.querySelector(".key--B");
const keyN=document.querySelector(".key--N");
const keyM=document.querySelector(".key--M");



const keyComma=document.querySelector(".key--comma");
const keyDot=document.querySelector(".key--dot");
const keySpace=document.querySelector(".key--Space");

const keyDelete=document.querySelector(".key--Delete");
const keyShift=document.querySelector(".key--Shift");
let string="";

let click="1";
let caps="";
keyShift.addEventListener('click',function(){
  
  click+="1";
  
  if((click.length)%2==0)
  {  
    caps="caps";
    
    keyQ.textContent="Q";
    keyW.textContent="W";
    keyE.textContent="E";
    keyR.textContent="R";
    keyT.textContent="T";
    keyY.textContent="Y";
    keyU.textContent="U";
    keyI.textContent="I";
    keyO.textContent="O";
    keyP.textContent="P";
    keyA.textContent="A";
    keyS.textContent="S";
    keyD.textContent="D";
    keyF.textContent="F";
    keyG.textContent="G";
    keyH.textContent="H";
    keyJ.textContent="J";
    keyK.textContent="K";
    keyL.textContent="L";
    keyZ.textContent="Z";
    keyX.textContent="X";
    keyC.textContent="C";
    keyV.textContent="V";
    keyB.textContent="B";
    keyN.textContent="N";
    keyM.textContent="M";
  
  
  }
  else
  {
    caps="";
    keyq.textContent="q";
    keyw.textContent="w";
    keye.textContent="e";
    keyr.textContent="r";
    keyt.textContent="t";
    keyy.textContent="y";
    keyu.textContent="u";
    keyi.textContent="i";
    keyo.textContent="o";
    keyp.textContent="p";
    keya.textContent="a";
    Keys.textContent="s";
    keyd.textContent="d";
    keyf.textContent="f";
    keyg.textContent="g";
    keyh.textContent="h";
    keyj.textContent="j";
    keyk.textContent="k";
    keyl.textContent="l";
    keyz.textContent="z";
    keyx.textContent="x";
    keyc.textContent="c";
    keyv.textContent="v";
    keyb.textContent="b";
    keyn.textContent="n";
    keym.textContent="m";
  }
});


keyDelete.addEventListener("click",function(){
  string=string.slice(0,-1); 
  displayBoard.textContent=string;
});


keyOne.addEventListener('click',function(){
  string+="1";
  displayBoard.textContent=string;
})

keyTwo.addEventListener('click',function(){
  string+="2";
  displayBoard.textContent=string;
})


keyThree.addEventListener('click',function(){
  string+="3";
  displayBoard.textContent=string;
})


keyFour.addEventListener('click',function(){
  string+="4";
  displayBoard.textContent=string;
})


keyFive.addEventListener('click',function(){
  string+="5";
  displayBoard.textContent=string;
})


keySix.addEventListener('click',function(){
  string+="6";
  displayBoard.textContent=string;
})


keySeven.addEventListener('click',function(){
  string+="7";
  displayBoard.textContent=string;
})

keyEight.addEventListener('click',function(){
  string+="8";
  displayBoard.textContent=string;
})


keyNine.addEventListener('click',function(){
  string+="9";
  displayBoard.textContent=string;
})


keyZero.addEventListener('click',function(){
  string+="0";
  displayBoard.textContent=string;
})


keyq.addEventListener('click',function(){
  if(caps=="caps"){
    string+="Q";
    displayBoard.textContent=string;
  }
  else{
    string+="q"
    displayBoard.textContent=string;
  }
  
})


keyw.addEventListener('click',function(){
  if(caps=="caps"){
    string+="W";
    displayBoard.textContent=string;
  }
  else{
    string+="w"
    displayBoard.textContent=string;
  }
})


keye.addEventListener('click',function(){
  if(caps=="caps"){
    string+="E";
    displayBoard.textContent=string;
  }
  else{
    string+="e"
    displayBoard.textContent=string;
  }
})


keyr.addEventListener('click',function(){
  if(caps=="caps"){
    string+="R";
    displayBoard.textContent=string;
  }
  else{
    string+="r"
    displayBoard.textContent=string;
  }
  })


keyt.addEventListener('click',function(){
  if(caps=="caps"){
    string+="T";
    displayBoard.textContent=string;
  }
  else{
    string+="t"
    displayBoard.textContent=string;
  }
  
})


keyy.addEventListener('click',function(){
  if(caps=="caps"){
    string+="Y";
    displayBoard.textContent=string;
  }
  else{
    string+="y"
    displayBoard.textContent=string;
  }
  
})


keyu.addEventListener('click',function(){
  if(caps=="caps"){
    string+="U";
    displayBoard.textContent=string;
  }
  else{
    string+="u"
    displayBoard.textContent=string;
  }
  
})


keyi.addEventListener('click',function(){
  if(caps=="caps"){
    string+="I";
    displayBoard.textContent=string;
  }
  else{
    string+="i"
    displayBoard.textContent=string;
  }
  
})


keyo.addEventListener('click',function(){
  if(caps=="caps"){
    string+="O";
    displayBoard.textContent=string;
  }
  else{
    string+="o"
    displayBoard.textContent=string;
  }
  
})


keyp.addEventListener('click',function(){
  if(caps=="caps"){
    string+="P";
    displayBoard.textContent=string;
  }
  else{
    string+="p"
    displayBoard.textContent=string;
  }
  
})


keya.addEventListener('click',function(){
  if(caps=="caps"){
    string+="A";
    displayBoard.textContent=string;
  }
  else{
    string+="a"
    displayBoard.textContent=string;
  }
  
})


Keys.addEventListener('click',function(){
  if(caps=="caps"){
    string+="S";
    displayBoard.textContent=string;
  }
  else{
    string+="s";
    displayBoard.textContent=string;
  }
  })


keyd.addEventListener('click',function(){
  if(caps=="caps"){
    string+="D";
    displayBoard.textContent=string;
  }
  else{
    string+="d"
    displayBoard.textContent=string;
  }
  
})


keyf.addEventListener('click',function(){
  if(caps=="caps"){
    string+="F";
    displayBoard.textContent=string;
  }
  else{
    string+="f"
    displayBoard.textContent=string;
  }
  })


keyg.addEventListener('click',function(){
  if(caps=="caps"){
    string+="G";
    displayBoard.textContent=string;
  }
  else{
    string+="g"
    displayBoard.textContent=string;
  }
  })


keyh.addEventListener('click',function(){
  if(caps=="caps"){
    string+="H";
    displayBoard.textContent=string;
  }
  else{
    string+="h"
    displayBoard.textContent=string;
  }
  })


keyj.addEventListener('click',function(){
  if(caps=="caps"){
    string+="J";
    displayBoard.textContent=string;
  }
  else{
    string+="j"
    displayBoard.textContent=string;
  }
  })


keyk.addEventListener('click',function(){
  if(caps=="caps"){
    string+="K";
    displayBoard.textContent=string;
  }
  else{
    string+="k"
    displayBoard.textContent=string;
  }
  })


keyl.addEventListener('click',function(){
  if(caps=="caps"){
    string+="L";
    displayBoard.textContent=string;
  }
  else{
    string+="l"
    displayBoard.textContent=string;
  }
})


keyz.addEventListener('click',function(){
  if(caps=="caps"){
    string+="Z";
    displayBoard.textContent=string;
  }
  else{
    string+="z"
    displayBoard.textContent=string;
  }
  
})


keyx.addEventListener('click',function(){
  if(caps=="caps"){
    string+="X";
    displayBoard.textContent=string;
  }
  else{
    string+="x"
    displayBoard.textContent=string;
  }
  })


keyc.addEventListener('click',function(){
  if(caps=="caps"){
    string+="C";
    displayBoard.textContent=string;
  }
  else{
    string+="c"
    displayBoard.textContent=string;
  }
  })


keyv.addEventListener('click',function(){
  if(caps=="caps"){
    string+="V";
    displayBoard.textContent=string;
  }
  else{
    string+="v"
    displayBoard.textContent=string;
  }
  
})


keyb.addEventListener('click',function(){
  if(caps=="caps"){
    string+="B";
    displayBoard.textContent=string;
  }
  else{
    string+="b"
    displayBoard.textContent=string;
  }
  })


keyn.addEventListener('click',function(){
  if(caps=="caps"){
    string+="N";
    displayBoard.textContent=string;
  }
  else{
    string+="n"
    displayBoard.textContent=string;
  }
  })


keym.addEventListener('click',function(){
  if(caps=="caps"){
    string+="M";
    displayBoard.textContent=string;
  }
  else{
    string+="m"
    displayBoard.textContent=string;
  }
  })


keyComma.addEventListener('click',function(){
  string+=",";
  displayBoard.textContent=string;
})


keyDot.addEventListener('click',function(){
  string+=".";
  displayBoard.textContent=string;
})


keySpace.addEventListener('click',function(){
  string+=" ";
  displayBoard.textContent=string;
})



/**************************************/
/************Theme key*************/
/**************************************/

let theme=document.querySelector(".key--Theme");

theme.addEventListener('click',function(){

  

  for(const key of keys)
  {
       
    if(key.classList.contains("peaceful--key"))
    {
      key.classList.remove("peaceful--key")
      key.classList.add("bold--key")
    }
    
    else if(key.classList.contains("bold--key"))
    {
      key.classList.remove("bold--key")
      key.classList.add("party--key")
    }
    
    else if(key.classList.contains("party--key"))
    {
      key.classList.remove("party--key")
      key.classList.add("peaceful--key")
    }
    
  }
  console.log( displayBoard.classList.contains('bold--fonts'));

  if(backGround.classList.contains('peaceful--background') && keyBoard.classList.contains('peaceful--keyboard') && displayBoard.classList.contains('peaceful--border') &&
  displayBoard.classList.contains('peaceful--fonts')
  )
  {
    backGround.classList.remove('peaceful--background');
    backGround.classList.add('bold--background');
    
    keyBoard.classList.remove('peaceful--keyboard');
    keyBoard.classList.add('bold--keyboard');
  
    displayBoard.classList.remove('peaceful--border');
    displayBoard.classList.add('bold--border');
  
    displayBoard.classList.remove('peaceful--fonts');
    displayBoard.classList.add('bold--fonts');
  
  }

  else if(backGround.classList.contains('bold--background') && keyBoard.classList.contains('bold--keyboard') &&
  displayBoard.classList.contains('bold--border') &&
  displayBoard.classList.contains('bold--fonts')
  )
  
  
  {
    backGround.classList.remove('bold--background');
    backGround.classList.add('party--background');
    
    keyBoard.classList.remove('bold--keyboard');
    keyBoard.classList.add('party--keyboard');
   
    displayBoard.classList.remove('bold--border');
    displayBoard.classList.add('party--border');

    displayBoard.classList.remove('bold--fonts');
    displayBoard.classList.add('party--fonts');
  
  }

  else if(backGround.classList.contains('party--background') && keyBoard.classList.contains('party--keyboard') &&
  displayBoard.classList.contains('party--border') &&
  displayBoard.classList.contains('party--fonts'))
  {
    backGround.classList.remove('party--background');
    backGround.classList.add('peaceful--background');
    
    keyBoard.classList.remove('party--keyboard');
    keyBoard.classList.add('peaceful--keyboard');
    
    displayBoard.classList.remove('party--border');
    displayBoard.classList.add('peaceful--border');
    
    displayBoard.classList.remove('party--fonts');
    displayBoard.classList.add('peaceful--fonts');
  
  }
});
