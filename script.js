document.getElementById("submit").addEventListener("click", () => {
    // This will hide the welcome section
    document.getElementById("welcome-section").style.display = "none";
    // This will show the inner section
    document.getElementById("transaction-area").style.display = "block";
});
