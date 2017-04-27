$(function() {
  var age = parseInt(prompt("Enter your current age:"));

  if (age >= 18) {
    $('#voters').show();

  } else {
    $('#minor').show();
  }
});
