// let inputs=document.getElementById("normal");
// const display=document.getElementById("calc_display")

// // inputs.addEventListener("click",function(){
// //     display.textContent+=inputs.innerText
// // })

// const resetbtn=document.getElementById("reset")

// resetbtn.addEventListener("click",function(){
//     display.textContent="";
// })

const display = document.getElementById("calc_display");
const buttons = document.querySelectorAll("button");
let currentValue = "";
let currentOperator = "";

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    
    const value = button.getAttribute("value");

    if (value === "equal") {
      if (currentOperator && currentValue) {
        currentValue = eval(currentValue);
        display.textContent = currentValue;
        currentOperator="";
        currentValue="";
        console.log("value is"+value)
        console.log("current value is" +currentValue)
      }
    } else if (value === "RESET") {
      currentValue = "";
      currentOperator = "";
      display.textContent = "";
    } else if (value.match(/[0-9]/)) {
      currentValue += value;
      display.textContent = currentValue;
      console.log("value is"+value)
      console.log("current value is" +currentValue)
      
    }
    else if(value==="delete"){
      currentValue = currentValue.substring(0, currentValue.length-1);
      display.textContent=currentValue;
      console.log("value is"+value)
      console.log("current value is" +currentValue)
    }
    
  else if(value.match(/[+*-/]/))
    {
      currentOperator=value;
      currentValue+=value;
      display.textContent+=currentOperator;
      console.log("value is"+value)
      console.log("current value is" +currentValue)
      

    }
    
    
  });
});

// else {
    //   if (currentOperator && currentValue) {
    //     currentValue = eval(currentValue);
    //     display.textContent = currentValue;
    //   }
    //   currentOperator = value;
    //   currentValue = "";
    // }