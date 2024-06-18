let billAmount = document.getElementById("ba");
let perTip = document.getElementById("pt");
let tipAmount = document.getElementById("ta");
let total = document.getElementById("total");
let message = document.getElementById("message");
let errormessage = "Please Enter a Valid Input.";
function calc()
{
    let billAmountValue = billAmount.value;
    let perTipValue = perTip.value;
    if (billAmountValue === "" || perTipValue==="")
    {
        message.textContent = errormessage;
    }
    else
    {
        message.textContent = "";
        let b = parseInt(billAmountValue);
        let p = parseInt(perTipValue);
        let calTip = (p/100)*b;
        let calTotal = b+calTip;
        tipAmount.textContent = calTip;
        total.textContent = calTotal;
    }
}