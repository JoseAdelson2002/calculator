const numbersButtons = document.querySelectorAll("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operator]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  clear() {
    this.currentOperandTextElement = "";
    this.previousOperandTextElement = "";
    this.operation = undefined;
  }
}
