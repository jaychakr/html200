function application() {
    let balance = 0;
    let action = '';
    while (action !== 'Q') {
        action = prompt('Enter Q to quit\nEnter W to withdraw\nEnter D to deposit\nEnter B to view balance');
        switch (action) {
            case 'W':
                let amountToWithdraw = Number(prompt('Enter amount to withdraw'));
                if (balance - amountToWithdraw < 0) {
                    alert('Withdrawal exceeds available balance!');
                    break;
                } else if (balance - amountToWithdraw < 300) {
                    let confirmation = prompt('Withdrawal will leave you with less than $300, do you wish to proceed?\nEnter Y/N');
                    if (confirmation == 'N') {
                        break;
                    }
                }
                balance -= amountToWithdraw;
                break;
            case 'D':
                let amountToDeposit = Number(prompt('Enter amount to deposit:'));
                if (balance + amountToDeposit > 50000) {
                    alert('Balance exceeds deposit cap of $50,000');
                    break;
                }
                balance += amountToDeposit;
                break;
            case 'B':
                let USDollar = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });
                alert(`The current balance is ${USDollar.format(balance)}`);
                break;
        }
    }
}