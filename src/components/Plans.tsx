import React, { useState } from "react";

const Plans = () => {
  const [plan, setPlan] = useState("");

  return (
    <>
      <header className="form__header">
        <h1 className="form__header--title">Select your plan</h1>
        <p className="form__header--sub">
          You have the option of monthly or yearly billing.
        </p>
      </header>
      <form className="form-plan">
        <div className="form__plan">
          <img src="" alt="" className="form__plan--icon" />
          <p className="form__plan--option">Arcade</p>
          <p className="form__plan--price">$9/mo</p>
        </div>
        <div className="form__plan"></div>
        <div className="form__plan"></div>
      </form>
    </>
  );
};

export default Plans;
