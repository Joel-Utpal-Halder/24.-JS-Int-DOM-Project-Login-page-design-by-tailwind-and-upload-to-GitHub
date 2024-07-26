document.getElementById("depositbutton").addEventListener("click", function () {
    // Deposit Section
  const depositInput = document.getElementById("depositinput");
  const depositInputValue = depositInput.value;
//   console.log(depositInputValue);

if (depositInputValue === '') {
    alert("Deposit Field Must Not Be Empty !");
} else {
    const depositAmount = document.getElementById("deposit_amount");
    const depositAmountText = depositAmount.innerText;
  
    const depositAmountCalculation = parseFloat(depositInputValue) + parseFloat(depositAmountText);
    depositAmount.innerText = depositAmountCalculation;
  
    // Clear Input Field
    depositInput.value = "";
  
    // Total Balance Section
  const totalBalance = document.getElementById("total_balance");
  const totalBalanceText = totalBalance.innerText;
  totalBalance.innerText = parseFloat(depositInputValue) + parseFloat(totalBalanceText);
}  
});
  // Withdraw Section
  document.getElementById("withdrawbutton").addEventListener('click', function(){
    const withdrawInput = document.getElementById("withdrawinput");
    const withdrawInputValue = withdrawInput.value;

    if (withdrawInputValue === '') {
        alert("Withdraw Field Must Not Be Empty !")
    } else {
        const withdrawAmount = document.getElementById("withdrawamount");
        const withdrawAmountText = withdrawAmount.innerText;
        const withdrawAmountCalculation = parseFloat(withdrawInputValue) + parseFloat(withdrawAmountText);
        withdrawAmount.innerText = withdrawAmountCalculation;
    
          // Total Balance Section
    const totalBalance = document.getElementById("total_balance");
    const totalBalanceText = totalBalance.innerText;
    totalBalance.innerText = parseFloat(totalBalanceText) - parseFloat(withdrawInputValue);
    
      // Clear Input Field
      withdrawInput.value = "";
    }    
  })
