import { closedMensageAlertError } from "./util.js";

export const Modal = {
  alertError: document.querySelector(".alertError"),
  alertResultBox: document.querySelector(".alertResultContainer"),
  alertResultClosed: document.querySelector(".alertResult img"),
  btnCalculator: document.querySelector("form button"),
  alertResult: document.querySelector(".alertResult p"),
  kg: document.querySelector(".kg input"),
  cm: document.querySelector(".cm input"),
  imc: 0,
};

Modal.kg.oninput = () => closedMensageAlertError();
Modal.cm.oninput = () => closedMensageAlertError();
