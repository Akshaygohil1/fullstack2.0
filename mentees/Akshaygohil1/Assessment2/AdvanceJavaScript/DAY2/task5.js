// Real-World Examples of Closures: Private Variables, Caching, and Event Listeners

// 1. Private Variables (Encapsulation)
// Closures allow us to hide data from the outside world, simulating private variables in JavaScript.

// 🔹 Use case: Securely store data that should not be accessible from outside.

// Example: Bank Account (Encapsulation)// Example: Bank Account (Encapsulation)
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: $${amount}. New Balance: $${balance}`);
            } else {
                console.log("Deposit amount must be positive.");
            }
        },
        withdraw: function (amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: $${amount}. Remaining Balance: $${balance}`);
            } else {
                console.log("Invalid withdrawal amount.");
            }
        },
        getBalance: function () {
            return balance; // Access private variable
        }
    };
}

const myAccount = createBankAccount(100);
myAccount.deposit(50); // Deposited: $50. New Balance: $150
myAccount.withdraw(30); // Withdrew: $30. Remaining Balance: $120
console.log(myAccount.getBalance()); // 120

// 2. Caching (Memoization)
// Closures can be used to cache results of expensive function calls, improving performance.
// Example: Fibonacci Sequence (Caching)
function createFibonacciCache() {
    const cache = {}; // Private cache

    return function fib(n) {
        if (n in cache) {
            console.log(`Fetching from cache: ${n}`);
            return cache[n];
        }
        if (n <= 1) return n;

        console.log(`Calculating: ${n}`);
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
}

const fibonacci = createFibonacciCache();
console.log(fibonacci(10)); // Calculates and caches results
console.log(fibonacci(6));  // Fetches from cache

