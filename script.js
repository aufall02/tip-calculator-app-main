const input = document.querySelectorAll('input');
const span = document.querySelectorAll('span');
const amount = document.getElementById('amount');
const btn = document.querySelectorAll('.option');
const btnReset = document.getElementById('#reset');


//melakukan prosen calculasi untuk tip
btn.forEach(button => {
    button.addEventListener('click', () => {
        isNaN(Number(input[0].value))?span[0].innerText =0.00:span[0].innerText = (Number((button.value)*input[0].value)).toFixed(2);
    })
  });
input[1].onchange = () => span[0].innerText = ((input[1].value/100)*input[0].value).toFixed(2);

const total = () =>  Number(input[0].value) + Number(span[0].innerText);
input[2].onkeyup = () => span[1].innerText = total(); 
  //untuk test apakah inputan angka/bukan
input.forEach(input => {
      input.oninput = () => isNaN(Number(input.value))?console.log('ini bukan angka'):console.log('ini angka');
    })

function clear(){
    span[0].innerText = '0.00';
    span[1].innerText = '0.00';
    input[0].value = 0
    input[1].value = null
    input[2].value = 0
}

// btnReset.onclick = () => console.log('clicked');