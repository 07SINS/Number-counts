const DecreaseBtn= document.getElementById("DecreaseBtn");
const ResetBtn= document.getElementById("ResetBtn");
const IncreaseBtn= document.getElementById("IncreaseBtn");
const countlabel= document.getElementById("countlabel");
let count=0;
DecreaseBtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}
IncreaseBtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
ResetBtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}