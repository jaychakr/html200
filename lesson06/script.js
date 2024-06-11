function application() {
    let balance = 0;
    let action = '';
    while (action !== 'Q') {
        action = prompt('Enter Q to quit\nEnter W to withdraw\nEnter D to deposit\nEnter B to view balance');
        switch (action) {
            case 'W':
                let amountToWithdraw = Number(prompt('Enter amount to withdraw'));
                balance -= amountToWithdraw;
                break;
            case 'D':
                let amountToDeposit = Number(prompt('Enter amount to deposit:'));
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