let people = [];

//constructor for objects
function Person (name, weight, height, bmi) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.bmi = bmi;
}

function addPerson(name, weight, height, bmi){
  let person = new Person(name, weight, height, bmi);
  people.push(person);
  console.log(people);
}

function calculateBMI(weight, height){
  const element = document.getElementById("calculated");
  element.innerHTML = weight/(height*height);
  return weight/(height*height);
}

function clearInput(){
  document.getElementById("name").value = ""
  document.getElementById("weight").value = ""
  document.getElementById("height").value = ""
}
