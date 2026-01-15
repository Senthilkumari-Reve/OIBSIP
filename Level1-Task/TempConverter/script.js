function convertTemp() {
  let input = document.getElementById("tempInput").value;
  let unit = document.getElementById("unit").value;
  let result = document.getElementById("result");

  if (input === "" || isNaN(input)) {
    result.innerText = "Please enter a valid number!";
    return;
  }

  let temp = Number(input);
  let output = "";

  if (unit === "c") {
    let f = (temp * 9/5) + 32;
    let k = temp + 273.15;
    output = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
  }

  if (unit === "f") {
    let c = (temp - 32) * 5/9;
    let k = c + 273.15;
    output = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
  }

  if (unit === "k") {
    let c = temp - 273.15;
    let f = (c * 9/5) + 32;
    output = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
  }

  result.innerText = output;
}
