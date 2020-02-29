// login button event handler
document.getElementById("submit").addEventListener("click", () => {
    // This will hide the welcome section
    document.getElementById("welcome-section").style.display = "none";
    // This will show the inner section
    document.getElementById("transaction-area").style.display = "block";
});

// deposit button event handler
document.getElementById("addDeposit").addEventListener("click", () => {
    // .value is input elements
    // .innerText is for other
    // Its because things don't work in setting thats why full form
    let depositAmount = parseFloat(document.getElementById("depositAmount").value);
    let currentDeposit = parseFloat(document.getElementById("currentDeposit").innerText);
    let currentBalance = parseFloat(document.getElementById("currentBalance").innerText);

    // Adding Deposit
    document.getElementById("currentDeposit").innerText = depositAmount + currentDeposit;

    // Adding Balance
    document.getElementById("currentBalance").innerText = currentBalance + depositAmount;

    // Reseting the input form
    document.getElementById("depositAmount").value = "";
});

// withdraw button event handler
document.getElementById("addWithdraw").addEventListener("click", () => {
    // .value is input elements
    // .innerText is for other
    // Its because things don't work in setting thats why full form
    let withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    let currentWithdraw = parseFloat(document.getElementById("currentWithdraw").innerText);
    let currentBalance = parseFloat(document.getElementById("currentBalance").innerText);

    // Adding Withdraw
    document.getElementById("currentWithdraw").innerText = withdrawAmount + currentWithdraw;

    // Subtracting Balance
    document.getElementById("currentBalance").innerText = currentBalance - withdrawAmount;

    // Reseting the input form
    document.getElementById("withdrawAmount").value = "";
});
