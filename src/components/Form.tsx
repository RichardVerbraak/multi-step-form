import React from "react";

const Form = () => {
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
        <header className="form__header">
          <h1 className="form__header--title">Personal Info</h1>
          <p className="form__header--sub">
            Please provide your name, email address, and phone number.
          </p>
        </header>

        <form className="form__inputs">
          <label className="form__inputs--label" htmlFor="name">
            Name
          </label>
          <input
            className="form__inputs--input"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
          />

          <label className="form__inputs--label" htmlFor="email">
            Email Address
          </label>
          <input
            className="form__inputs--input"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />

          <label className="form__inputs--label" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="form__inputs--input"
            type="number"
            name="phone"
            id="phone"
            placeholder="e.g + 1 234 567 890"
          />

          <button className="form__button">Next Step</button>
        </form>
      </div>
    </main>
  );
};

export default Form;
