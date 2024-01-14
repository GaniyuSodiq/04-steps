import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    //step > 1 && setStep(step - 1);
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    //step < 3 && setStep(step + 1);
    if (step < 3) setStep(step + 1);

    //BAD PRACTICE - never mutate a state this way!
    //Text.name = "Fred";
    // THIS IS GOOD PRACTIVE
    //setTest({ name: "Fred" });
  }
  return (
    <>
      <button
        className="close"
        // onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))} // my best moment up to this point - i wrote this code myself
        onClick={() => setIsOpen(!isOpen)}
        // set isOpen to OPPOSITE of whatever it is currently, simple bcs it is either tru or false
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previuos
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
