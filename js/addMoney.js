document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault();
   const addMoney = document.getElementById('add-money').value;
   const pinNumber = document.getElementById('add-pin').value;

   const addMoneyNumber = parseFloat(addMoney);
   console.log(addMoney, pinNumber);

   if(pinNumber === '234567'){
    const balance = document.getElementById('balance').innerText;
    const balanceNumber = parseFloat(balance);
    const updatedBalance = balanceNumber + addMoneyNumber;
    document.getElementById('balance').innerText = updatedBalance;
    console.log(updatedBalance);
    
   }
   else{
    alert('please use valid number or pin')
   }
   
})