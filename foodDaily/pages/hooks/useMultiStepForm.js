import { useState } from "react";

export function useMultiStepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function nextStep() {
    setCurrentStepIndex((prevStep) =>
      prevStep >= steps.length - 1 ? prevStep : prevStep + 1
    );
  }

  function prevStep() {
    setCurrentStepIndex((prevStep) =>
      prevStep <= 0 ? prevStep : prevStep - 1
    );
  }

  function goTo(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex + 1 === steps.length,
    goTo,
    nextStep,
    prevStep,
  };
}