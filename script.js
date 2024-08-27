const billInput=document.getElementById("bill");
const tipInput=document.getElementById("tip");
const btn=document.getElementById("btn");
const Totalamt=document.getElementById("total");
const resetbtn=document.getElementById("reset");

function CalcTotal(){
    const billval=billInput.value;
    const tipval=tipInput.value;
    const totalval=billval*(1+tipval/100);
    Totalamt.innerHTML=`Total: ${totalval.toFixed(2)}`;
}

btn.addEventListener("click",CalcTotal);

resetbtn.addEventListener("click",()=>{
    billInput.value="";
    tipInput.value="";
    Totalamt.innerHTML="Total: 0.00";
})