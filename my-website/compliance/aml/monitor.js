const TransactionMonitor = require('../../backend/src/services/transactionService');

class AMLMonitor {
    constructor() {
        this.monitorTransactions();
    }

    monitorTransactions() {
        setInterval(async () => {
            try {
                const suspiciousTransactions = await TransactionMonitor.getSuspiciousTransactions();
                if (suspiciousTransactions.length > 0) {
                    this.handleSuspiciousTransactions(suspiciousTransactions);
                }
            } catch (error) {
                console.error('Error monitoring transactions:', error);
            }
        }, 60000); // Check every minute
    }

    handleSuspiciousTransactions(transactions) {
        transactions.forEach(transaction => {
            console.log('Suspicious transaction detected:', transaction);
            // Implement further actions such as alerting or logging
        });
    }
}

new AMLMonitor();