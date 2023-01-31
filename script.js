const tipBtn = document.querySelectorAll('.grid-item');
const bill = document.getElementById('bill');
const tipCustom = document.getElementById('tip');
const personAmount = document.getElementById('people');
const results = document.querySelectorAll('.price');
const resetBtn = document.getElementById('reset');

bill.addEventListener('input', setBillValue);
tip.addEventListener('input', setCustomTipValue);
tipBtn.forEach(btn => {
    btn.addEventListener('click', handleClick);
});
personAmount.addEventListener('input', setPersonAmount);
resetBtn.addEventListener('click', reset);
let billValue = 0.0;
let tipValue = 0.0;
let personValue = 1;


function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.');
    }
    billValue = parseFloat(bill.value);
    calculateTip();
    console.log(billValue);
}

function handleClick(e) {
    tipBtn.forEach(btn => {
        btn.classList.remove('active');
        if (e.target.innerHTML == btn.innerHTML) {
            btn.classList.add('active');
            tipValue = parseFloat(btn.innerHTML) / 100;
        }
    });
    tipCustom.value = "";
    calculateTip();
}


function setCustomTipValue() {
    tipValue = parseFloat(tipCustom.value / 100);
    calculateTip();
}


function setPersonAmount() {
    personValue = parseFloat(personAmount.value);
    if (personValue <= 0) {
        document.getElementById('error').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'none';
    }
    calculateTip();
}

function calculateTip() {
    if (personValue >= 1) {
        let tipAmount = billValue * tipValue / personValue;
        let total = billValue * (tipValue + 1) / personValue;
        results[0].innerHTML = '$' + tipAmount.toFixed(2);
        results[1].innerHTML = '$' + total.toFixed(2);


    }
}



function reset() {
    bill.value = 0;
    setBillValue();
    tipCustom.value = 0;
    setCustomTipValue();
    personAmount.value = '';
    setPersonAmount();
    tipCustom.value = "";


}