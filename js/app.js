document.getElementById("kitkat-buy-btn").addEventListener('click',function(){
   const quantity = document.getElementById("kitkat-quantity").value;
   const kitkatCost = quantity * 200;
   setInnerText("chocolate", kitkatCost);
})
document.getElementById("rose-buy-btn").addEventListener('click',function(){
   const quantity = document.getElementById("rose-quantity").value;
   const roseCost = quantity * 200;
   setInnerText("rose", roseCost);
})
document.getElementById("diary-buy-btn").addEventListener('click',function(){
   const quantity = document.getElementById("diary-quantity").value;
   const diaryCost = quantity * 200;
   setInnerText("diary", diaryCost);
})

function setInnerText(id, value){
  document.getElementById(id).innerText = value;
}