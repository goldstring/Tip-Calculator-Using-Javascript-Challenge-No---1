let billAmt = document.getElementById('bill_amt');
let tipPercentage = document.getElementById('tip_percentage_input');
let tipPercentageValue = 0;

let calculate = document.getElementsByClassName('calculate')[0];
let tipResult = document.getElementsByClassName('tip_result')[0];
let tipPercentageTitle = document.getElementById('tip_percentage_value');

tipPercentage.addEventListener('input', function () {
  tipPercentageValue = this.value;
  tipPercentageTitle.innerHTML = this.value + ' %';
});

calculate.addEventListener('click', function () {
  let alert = document.getElementsByClassName('alert')[0];
  if (isNaN(parseInt(billAmt.value)) || parseInt(billAmt.value) === 0) {
    alert.innerHTML = `<strong>Error!</strong> Please Enter Some Bill Value.`;
    alert.style.display = 'block';
    tipPercentage.value = 0;
    tipPercentageTitle.innerHTML = 0;
    tipResult.innerHTML = 0;
  } else {
    alert.style.display = 'none';
    let result = parseInt(billAmt.value) * (parseInt(tipPercentageValue) / 100);
    tipResult.innerHTML = Math.ceil(result);
  }
});
