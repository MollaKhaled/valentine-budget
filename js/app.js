document.getElementById("kitkat-buy-btn").addEventListener('click', function () {
  const quantity = inputFieldValue('kitkat-quantity');
  const kitkatCost = quantity * 200;
  setInnerText("chocolate", kitkatCost);
  total();
})
document.getElementById("rose-buy-btn").addEventListener('click', function () {
  const quantity = inputFieldValue('rose-quantity')
  const roseCost = quantity * 100;
  setInnerText("rose", roseCost);
  total();
})
document.getElementById("diary-buy-btn").addEventListener('click', function () {
  const quantity = inputFieldValue("diary-quantity");
  const diaryCost = quantity * 300;
  setInnerText("diary", diaryCost);
  total();
})

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
function inputFieldValue(id) {
  const value = document.getElementById(id).value;
  return parseInt(value);
}

function total() {
  const chocolate = document.getElementById("chocolate").innerText;
  const rose = document.getElementById("rose").innerText;
  const diary = document.getElementById("diary").innerText;
  const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
  setInnerText("total", totalSum);

}

document.getElementById("promo-code-btn").addEventListener('click', function () {
  const promoCode = inputFieldValue("promo-code")
  if (promoCode === 2023) {
    const total = document.getElementById("total").innerText;
    const sum = total - parseInt(total) * 0.2;
    setInnerText("all-total", sum)

  }
  else {
    alert("Wrong Promo Code Try With Valid Promo Code !!!")
  }
})