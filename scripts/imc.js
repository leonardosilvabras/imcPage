import { Modal } from "./modal.js";
import {
  hidenOnOrOff,
  ImcResult,
  closedMensageAlertError,
  resetLabelValues,
} from "./util.js";

const imcFunctions = {
  notNumber(value) {
    return isNaN(value) || value == "";
  },
  openCard(e) {
    if (
      imcFunctions.notNumber(Modal.kg.value) == false &&
      imcFunctions.notNumber(Modal.cm.value) == false
    ) {
      e.preventDefault();
      hidenOnOrOff(Modal.alertResultBox);

      Modal.alertResult.innerText = `Seu IMC é de ${ImcResult(
        Modal.kg.value,
        Modal.cm.value
      ).toFixed(2)}`;

      closedMensageAlertError();
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
