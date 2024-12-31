calculatebmi = () => {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let heightvalue = document.getElementById("units").value;

  if (heightvalue == "cm") {
    height = height * 0.01;
  }
  if (!weight || !height) {
    document.getElementById("result").innerText =
      "Please Enter Your Weight And Height";
    document.getElementById("result2").innerText = "";
  } else {
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    let t = " ";
    if (bmi < 18.5) {
      t = "Under-Weight";
    } else if (bmi > 18.5 && bmi < 24.9) {
      t = "Normal";
    } else if (bmi > 25.0 && bmi < 29.9) {
      t = "Over-Weight";
    } else if (bmi > 30 && bmi < 35) {
      t = "Obesity";
    } else if (bmi >= 35) {
      t = "Severe obesity";
    }
    result = "Your BMI Is " + bmi;
    let result2 = t;
    document.getElementById("result").innerText = result;
    document.getElementById("result2").innerText = result2;

    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
  }
};
