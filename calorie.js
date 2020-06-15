const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const age = document.getElementById("age").value;
  const bmi = weight / height * 100 / height * 100

  const gender = document.getElementById("gender");
  const genderList = gender.gender;
  const a = genderList.value;

  let bmr = 0;
  if (a == "male") {
    bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
  } else {
    bmr = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
  }

  const level1 = document.form1.level1;
  const num = level1.selectedIndex;
  const b = level1.options[num].value;

  let tdee = 0;
  if (b == 1) {
    tdee = bmr * 1.2;
  } else if (b == 2) {
    tdee = bmr * 1.375;
  } else if (b == 3) {
    tdee = bmr * 1.55;
  } else if (b == 4) {
    tdee = bmr * 1.725;
  } else {
    tdee = bmr * 1.9;
  }

  const target = document.getElementById("target").value;
  const period = document.getElementById("period").value;
  const calorie = tdee - (weight - target) * 7200 / period;

  document.getElementById("bmi").innerHTML = Math.round(bmi * 10) / 10;
  document.getElementById("bmr").innerHTML = Math.round(bmr) + "kcal";
  document.getElementById("tdee").innerHTML = Math.round(tdee) + "kcal";
  document.getElementById("calorie").innerHTML = Math.round(calorie) + "kcal";
})
