const alertError = document.querySelector(".alertError"),
  alertResultBox = document.querySelector(".alertResultContainer"),
  alertResultClosed = document.querySelector(".alertResult img"),
  btnCalculator = document.querySelector("form button");

let alertResult = document.querySelector(".alertResult p"),
  kg = document.querySelector(".kg input"),
  cm = document.querySelector(".cm input"),
  imc = 0;

hidenOnOrOff = (item) => item.classList.toggle("hide");

resetLabelValues = () => {
  kg.value = "";
  cm.value = "";
};

ImcResult = (kg, cm) => (imc = kg / (cm / 100) ** 2);

ImcEvent = (e) => {
  if (kg.value != "" && cm.value != "") {
    e.preventDefault();
    hidenOnOrOff(alertResultBox);

    alertResult.innerText = `
    Seu IMC é de ${ImcResult(kg.value, cm.value).toFixed(2)}
  `;
  } else {
    e.preventDefault();
    hidenOnOrOff(alertError);
    resetLabelValues();
  }
};

closedCard = (e) => {
  e.preventDefault();
  hidenOnOrOff(alertResultBox);
  resetLabelValues();
};

btnCalculator.addEventListener("click", ImcEvent);
alertResultClosed.addEventListener("click", closedCard);
