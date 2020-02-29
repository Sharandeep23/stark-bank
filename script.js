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
    let depositAmount = getAmount("depositAmount");

    // Adding Deposit
    updateAmount("currentDeposit", depositAmount);

    // Adding Balance
    updateAmount("currentBalance", depositAmount);

    // Resetting the input form
    document.getElementById("depositAmount").value = "";
});

// withdraw button event handler
document.getElementById("addWithdraw").addEventListener("click", () => {
    // .value is input elements
    // .innerText is for other
    let withdrawAmount = getAmount("withdrawAmount");

    // Adding Withdraw
    updateAmount("currentWithdraw", withdrawAmount);

    // Subtracting Balance
    updateAmount("currentBalance", withdrawAmount * -1);

    // Resetting the input form
    document.getElementById("withdrawAmount").value = "";
});

function getAmount(id) {
    return parseFloat(document.getElementById(id).value);
}

function updateAmount(id, amount) {
    let idAmount = parseFloat(document.getElementById(id).innerText);
    document.getElementById(id).innerText = idAmount + amount;
}
