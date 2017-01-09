var bmi = function () {
  var height = prompt("What is your height in inches?");
  var weight = prompt("What is your weight in pounds?");
  weight = parseFloat(weight);
  console.log(weight);
  height = parseFloat(height);
  console.log(height);
  height = height * height;
  console.log(height);
  return (weight / (height)) * 703;
}

//alert("Your height in centimeters is " + (parseFloat(height) * .025));
//alert("your weight in kg is " + (parseFloat(weight) * 0.45));
alert("Your BMI is " + bmi());
