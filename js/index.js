const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click",function(){
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    // console.table({income,software,courses,internet});

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const totalExpensesElement = document.getElementById("total-expenses");
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById("results");
    result.classList.remove("hidden");
});


const calculateSavingsButton = document.getElementById("calculate-savings");
calculateSavingsButton.addEventListener("click",function(){
const savingPercentage = parseFloat(document.getElementById("savings").value);

const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    // console.table({income,software,courses,internet});

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingsAmmount = (savingPercentage * balance) / 100 ;
    
    const remainingBalance = balance - savingsAmmount;

    const savingsElement = document.getElementById("savings-amount");
    savingsElement.innerText = savingsAmmount.toFixed(2);

    const remainingElement = document.getElementById("remaining-balance");
    remainingElement.innerText = remainingBalance.toFixed(2);
});