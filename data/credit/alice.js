module.exports = {
    "username": "alice",
    "password": "wonderland",
    "UIN": "UIN-xxxx",
    "creditScore": 700,
    "banks": [
        {
            bankName: 'Barclays',
            bankId: 'BBaarrccllaayyss',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: '456789 0123456789',
                    accountTitle: 'Low Rate',
                    creditLimit: 3000,
                    availableCredit: 1000,
                    totalBalanceDue: 2000,
                    minBalanceDue: 500,
                    apr: 35,
                    dueDate: new Date().setDate(new Date().getDate()+5)                         
                }
            ]
        },
        {
            bankName: 'Citi Bank',
            bankId: 'CCiittii  BBaannkk',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: '567890 1234567890',
                    accountTitle: 'No Fee 0% Balance Transfer',
                    creditLimit: 4000,
                    availableCredit: 1500,
                    totalBalanceDue: 2500,
                    minBalanceDue: 400,
                    apr: 25,
                    dueDate: new Date().setDate(new Date().getDate()+12)                          
                }
            ]
        },
        {
            bankName: 'HSBC',
            bankId: 'HHSSBBCC',
            accounts: [
                {
                    accountType: 'M',
                    accountNumber: '567890 1234567890',
                    accountTitle: 'Home Loan',
                    minMonthlyPayment: 150,
                    remainingFullTerm: '2Y 3M',
                    totalBalanceDue: 2000,
                    minBalanceDue: 2000,
                    interestRate: 2.5,
                    dueDate: new Date().setDate(new Date().getDate()+20)                         
                }
            ]
        }
    ]
}
