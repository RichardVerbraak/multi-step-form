import React, { useState } from "react";
import Personal from "./Personal";
import Plans from "./Plans";

const Form = () => {
  const [stepId, setStepId] = useState(1);

  const nextPage = () => {
    setStepId((prevStep) => {
      return prevStep + 1;
    });
  };

  const prevPage = () => {
    setStepId((prevStep) => {
      return prevStep - 1;
    });
  };

  return (
    <main className="container">
      <div className="sidebar">
        <div className="sidebar__step">
          <p className="sidebar__step--number">1</p>
          <div className="sidebar__step--container">
            <p className="sidebar__step--sub">Step 1</p>
            <p className="sidebar__step--title">Your Info</p>
          </div>
        </div>

        <div className="sidebar__step">
          <p className="sidebar__step--number">2</p>
          <div className="sidebar__step--container">
            <p className="sidebar__step--sub">Step 2</p>
            <p className="sidebar__step--title">Select Plan</p>
          </div>
        </div>

        <div className="sidebar__step">
          <p className="sidebar__step--number">3</p>
          <div className="sidebar__step--container">
            <p className="sidebar__step--sub">Step 3</p>
            <p className="sidebar__step--title">Add-ons</p>
          </div>
        </div>

        <div className="sidebar__step">
          <p className="sidebar__step--number">4</p>
          <div className="sidebar__step--container">
            <p className="sidebar__step--sub">Step 4</p>
            <p className="sidebar__step--title">Summary</p>
          </div>
        </div>
      </div>

      <div className="form">
        {stepId === 1 && <Personal />}
        {stepId === 2 && <Plans />}

        {stepId !== 1 && (
          <button className="btn form__button--back" onClick={() => prevPage()}>
            Go Back
          </button>
        )}

        <button className="btn form__button--next" onClick={() => nextPage()}>
          Next Step
        </button>
      </div>
    </main>
  );
};

export default Form;
