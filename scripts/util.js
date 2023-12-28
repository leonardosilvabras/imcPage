import { Modal } from "./modal.js";

export const hidenOnOrOff = (item) => item.classList.toggle("hide");

export const resetLabelValues = () => {
  Modal.kg.value = "";
  Modal.cm.value = "";
};

export const ImcResult = (kg, cm) => (Modal.imc = kg / (cm / 100) ** 2);

export const closedMensageAlertError = () =>
  Modal.alertError.classList.add("hide");
