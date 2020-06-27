function calcAmount() {
let amountInputJs = document.querySelector("input[name=amountInput]");
let price=1200;
let amount = 0;
let amountNumber = parseInt(amountInputJs.value);
amount = amountNumber * price;
amountNumber = isNaN(amountNumber) ? 0 : amountNumber
if (amountNumber>10){alert("Maximum 10 hamburgert vásárolhatsz!")}
else if(amountNumber<1){alert("Minimum 1 hamburgert kell vásárolnod!")}
else{let showAmountJs=document.querySelector("span[class=showAmount]")
showAmountJs.innerHTML=amount}
}

