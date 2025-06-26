

   // Login Event
        const loginBtn = document.getElementById('loging-start');
        loginBtn.addEventListener('click', function () {
            const emailField = document.getElementById('email');
            const passwordField = document.getElementById('password');

            const email = emailField.value;
            const password = passwordField.value;

            // Basic validation
            if (email === '' || password === '') {
                alert('Please enter your email and password.');
                return;
            }

            // Successful login
            document.getElementById('loging-area').style.display = 'none';
            document.getElementById('transaction-area').style.display = 'block';
        });

        // Deposit Event
        const depositBtn = document.getElementById('adddeposit');
        depositBtn.addEventListener('click', function () {
            const depositAmount = document.getElementById('depositAmount').value;
            const depositNumber = parseFloat(depositAmount);

            if (isNaN(depositNumber) || depositNumber <= 0) {
                alert('Please enter a valid deposit amount.');
                return;
            }

            // Update deposit and balance
            updateSpan('correntDeposite', depositNumber);
            updateSpan('currentBalence', depositNumber);

            // Clear input field
            document.getElementById('depositAmount').value = '';
        });

        // Withdraw Event
        const withdrawBtn = document.getElementById('addwithro');
        withdrawBtn.addEventListener('click', function () {
            const withdrawAmount = document.getElementById('withdrawAmount').value;
            const withdrawNumber = parseFloat(withdrawAmount);

            if (isNaN(withdrawNumber) || withdrawNumber <= 0) {
                alert('Please enter a valid withdraw amount.');
                return;
            }

            const currentBalanceText = document.getElementById('currentBalence').innerText;
            const currentBalance = parseFloat(currentBalanceText);

            if (withdrawNumber > currentBalance) {
                alert('Insufficient Balance.');
                return;
            }

            // Update withdraw and balance
            updateSpan('correntWithdraw', withdrawNumber);
            updateSpan('currentBalence', -withdrawNumber);

            // Clear input field
            document.getElementById('withdrawAmount').value = '';
        });

        // Update Function
        function updateSpan(id, amount) {
            const currentText = document.getElementById(id).innerText;
            const currentNumber = parseFloat(currentText);
            const total = currentNumber + amount;
            document.getElementById(id).innerText = total;
        }