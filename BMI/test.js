var recordBMIs = [];

function recordBMI(name_user, weight_user, height_user, bmi) {
  this.name_user = name_user;
  this.weight_user = weight_user;
  this.height_user = height_user;

  this.doReport = function () {
    return (
      this.name_user +
      "," +
      this.weight_user +
      "," +
      this.height_user +
      "," +
      this.bmi
    );
  };
}

function calculateBMI() {
  let height_user = parseInt(document.querySelector("#height_user").value);

  let weight_user = parseInt(document.querySelector("#weight_user").value);

  let result = document.querySelector("#result");

  if (height_user === "" || isNaN(height_user))
    result.innerHTML = "Provide a valid Height!";
  else if (weight_user === "" || isNaN(weight_user))
    result.innerHTML = "Provide a valid Weight!";
  else {
    // Fixing upto 2 decimal places
    let bmi = (weight_user / ((height_user * height_user) / 10000)).toFixed(2);

    if (bmi < 18.6) result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `Normal : <span>${bmi}</span>`;
    else result.innerHTML = `Over Weight : <span>${bmi}</span>`;
    return bmi;
  }
}

function doReport() {
  output = "";
  for (var i = 0; i < recordBMIs.length; i++) {
    output += i + 1 + ") " + recordBMIs[i].doReport() + "; ";
  }
  document.getElementById("output").innerHTML = output;
}

function users() {
  var person = new recordBMI(
    document.getElementById("name_user").value,
    document.getElementById("height_user").value,
    document.getElementById("weight_user").value
  );
  recordBMIs.push(person);
  doReport();
}
