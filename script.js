const amt = document.getElementById('amount');
const cat = document.getElementById('category');
const dat = document.getElementById('date');
const btn = document.getElementById('btn');
const out1 = document.getElementById('out1');
const out2 = document.getElementById('out2');
const out3 = document.getElementById('out3');

function fun(){
   out1.innerHTML = amt.value;
   out2.innerHTML = cat.value;
   out3.innerHTML = date.value;
}

btn.addEventListener('click',fun);
