function calculate(multiplier) {
    // Get the user input value
    var num1 = document.getElementById("num1").value;
  
    // Calculate the result based on the multiplier and user input
    var result = num1 * multiplier;
    result = Math.round(result);
  
    // Display the result in the result box
    document.getElementById("result").value = result;
  }