const loginBtn = document.getElementById('loging-start');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('loging-area');
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

// Event deposit handler
const depositBtn = document.getElementById('adddeposit');
depositBtn.addEventListener('click', function () {

    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    // Validation
    if (isNaN(depositNumber) || depositNumber <= 0) {
        alert('Please enter a valid deposit amount.');
        return;
    }

    // Update deposit and balance
    updateSpan('correntDeposite', depositNumber);
    updateSpan('currentBalence', depositNumber);

    // Clear the input field after deposit
    document.getElementById('depositAmount').value = '';
});

// Update function
function updateSpan(id, amount) {
    const currentText = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentText);

    const total = amount + currentNumber;

    document.getElementById(id).innerText = total;
}
