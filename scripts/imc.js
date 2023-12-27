import { Modal } from "./modal.js";

const imcFunctions = {
  openCard(e) {
    if (Modal.kg.value != "" && Modal.cm.value != "") {
      e.preventDefault();
      hidenOnOrOff(Modal.alertResultBox);

      Modal.alertResult.innerText = `
      Seu IMC é de ${ImcResult(Modal.kg.value, Modal.cm.value).toFixed(2)}
    `;
    } else {
      e.preventDefault();
      hidenOnOrOff(Modal.alertError);
      resetLabelValues();
    }
  },
  closedCard(e) {
    e.preventDefault();
    hidenOnOrOff(Modal.alertResultBox);
    resetLabelValues();
  },
};
Modal.btnCalculator.addEventListener("click", imcFunctions.openCard);
Modal.alertResultClosed.addEventListener("click", imcFunctions.closedCard);

const hidenOnOrOff = (item) => item.classList.toggle("hide"),
  resetLabelValues = () => {
    Modal.kg.value = "";
    Modal.cm.value = "";
  },
  ImcResult = (kg, cm) => (Modal.imc = kg / (cm / 100) ** 2),
  handleKeydown = (event) => {
    if (event.key === "Escape" || event.key === "Enter") {
      imcFunctions.closedCard;
      console.log("piu", event.key);
    }
  };
window.addEventListener("keydown", handleKeydown);
