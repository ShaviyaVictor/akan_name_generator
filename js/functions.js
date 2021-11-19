//testing to see if I've linked them properly
//let add = function(num1, num2){
//  return num1 / num2;
//}
//let num1 = parseInt(prompt('Enter a number:'));
//let num2 = parseInt(prompt('Enter another number:'));
//let results = add(num1, num2);
//alert(results);

//      creating variables for the days of the week and the gender names
let masculineNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let feminineNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurdsday', 'Friday', 'Saturday']


function akanNameGenerate(event){
    event.preventDefault()
  let date = document.getElementById('date').value;
  let gender = document.getElementById('gender').value;

  let dayNumber = new Date(date).getDay()

  if (gender == ' ' || date == ' '){
          document.getElementById("output").innerHTML = (`Oops! Blockage Error! Provide both the Date of Birth as well as the Gender.`)
  }

  else if (gender == 'Masculine'){
          document.getElementById("output").innerHTML = (`Yey! You were born on ${daysOfWeek[dayNumber]} and your Akan name is ${masculineNames[dayNumber]}`)
  }

  else if (gender == 'Feminine'){
          document.getElementById("output").innerHTML = (`Yey! You were born on ${daysOfWeek[dayNumber]} and your Akan name is ${feminineNames[dayNumber]}`)
  }

  else {
          document.getElementById("output").innerHTML = ('Oops! Check your input value(s).')
  }
}