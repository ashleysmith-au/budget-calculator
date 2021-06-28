
// Script for tabs
function openTab(evt, TabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("Tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
    }
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " tab-active";
  };

  // Script for total expense viewer 
  function findTotal(){
      var arr = document.getElementsByClassName('expenseInput');
      var tot=0;
      for(var i=0;i<arr.length;i++){
          if(parseFloat(arr[i].value))
              tot += parseFloat(arr[i].value);
      }
      document.getElementById('totalordercost').value = tot;
  };

function calculateTotalMonthlyRepaymentAmount() {
  //Script for Customer Name
let customerName = document.getElementById("customerName").value;

  // Script for Monthly Expenses & Salary amount 
  let loanAmount = document.getElementById("loanAmount").value;
  let interestRate = document.getElementById("interestRate").value / 100;  
  let monthlyRepaymentAmount = loanAmount * (interestRate / 12); 

  // Script for monthly repayment amount 
  let expenseAmount = document.getElementById("totalordercost").value;
  let monthlySalary = document.getElementById("monthlySalary").value;  
  let leftOverMoney = monthlySalary - expenseAmount;

  // Script for finished calculation 
  let totalBalance = leftOverMoney - monthlyRepaymentAmount;
      
    document.getElementById("leftOverMoney").innerHTML = leftOverMoney.toFixed(2);
    document.getElementById("totalMonthlyRepaymentAmount").innerHTML = monthlyRepaymentAmount.toFixed(2);
    document.getElementById("totalLeftOver").innerHTML = totalBalance.toFixed(2);

  // Script for result indicator 
    if (totalBalance > 0 && customerName.value != 0) {
      document.getElementById("successfulResult").style.display = "Block";
      document.getElementById("successtotalLeftOver").innerHTML = ' with ' + totalBalance.toFixed(2) + ' left.';
      document.getElementById("failedResult").style.display = "None";
      document.getElementById("resultText").innerHTML = customerName + '&apos;s Results' ; 
      document.getElementById("resultsContainer").style.display = "Block";

    } else if (totalBalance < 0 && customerName.value != 0) {
      document.getElementById("failedResult").style.display = "Block";
      document.getElementById("successfulResult").style.display = "None";
      document.getElementById("resultText").innerHTML = customerName + '&apos;s Results' ;
      document.getElementById("resultsContainer").style.display = "Block";
  } else {
      document.getElementById("failedResult").style.display = "Block";
      document.getElementById("successfulResult").style.display = "None";
      document.getElementById("resultText").innerHTML = 'Your Results' ;
      document.getElementById("resultsContainer").style.display = "Block";
    }
};
  
