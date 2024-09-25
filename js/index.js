function getInputValueById(id){
    return parseFloat(document.getElementById(id).value)
//     return value;
 }

 function showerror(id)
 {
    document.getElementById(id).classList.remove(id);
 }

function formetCurrency(amount)
{
    return `${amount.toFixed(2)}`
}

// formatCurrency(income)

const calculateButton = document.getElementById("calculate");
let count = 0;
calculateButton.addEventListener("click", function () {
    count++;
    
    const income = getInputValueById("income");
    // const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    // console.table({income,software,courses,internet});
    
    if (income <=0 || isNaN(income))
    {
        showerror("income-error");
        // document.getElementById("income-error").classList.remove("hidden");
        return;
    }

    if (income <=0 || isNaN(software))
        {
            document.getElementById("software-error").classList.remove("hidden");
            return;
        }
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const totalExpensesElement = document.getElementById("total-expenses");
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById("results");
    result.classList.remove("hidden");

    const historyItem = document.createElement("div");
    historyItem.className = 
    "bg-white p-3 rounded-md border-1-2 border-indigo-500"

    historyItem.innerHTML = 
    `
    <p class="text-xl font-bold text-gray-500"> Serial:${count}</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
     <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
      <p class="text-xs text-gray-500">Total_Expenses: $${totalExpenses.toFixed(2)}</p>

    `

    const historyContainer = document.getElementById("history-list");

    historyContainer.insertBefore(historyItem,historyContainer.firstChild);
    // document.getElementById("history-section").classList.remove("hidden");
});


const calculateSavingsButton = document.getElementById("calculate-savings");
calculateSavingsButton.addEventListener("click", function () {
    const savingPercentage = parseFloat(document.getElementById("savings").value);

    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    // console.table({income,software,courses,internet});

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingsAmmount = (savingPercentage * balance) / 100;

    const remainingBalance = balance - savingsAmmount;

    const savingsElement = document.getElementById("savings-amount");
    savingsElement.innerText = savingsAmmount.toFixed(2);

    const remainingElement = document.getElementById("remaining-balance");
    remainingElement.innerText = remainingBalance.toFixed(2);
});


// history section

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click", function () {
    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    historyTab.classList.remove("text-gray-600");
    // console.log(historyTab);

    assistantTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    assistantTab.classList.add("text-gray-600");

    document.getElementById("expense-form").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
});

assistantTab.addEventListener("click",function(){
    assistantTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );

    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    document.getElementById("expense-form").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
});

// document.getElementById("income").addEventListener("input",function()
// {
//     const inputValue = parseFloat(document.getElementById("income").value);
//     console.log(inputValue);
//     if(isNaN(inputValue) || inputValue <=0)
//     {
//         document.getElementById("income-error").classList.remove("hidden");
//         return;
//     }
// })