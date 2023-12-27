import { Modal } from "./modal.js";

export const hidenOnOrOff = (item) => item.classList.toggle("hide"),
  resetLabelValues = () => {
    Modal.kg.value = "";
    Modal.cm.value = "";
  },
  ImcResult = (kg, cm) => (Modal.imc = kg / (cm / 100) ** 2);