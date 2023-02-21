import React from "react";

const Form = () => {
  return (
    <main className="container">
      <div className="sidebar">
        <div className="sidebar__step">
          <p className="sidebar__step--number">1</p>
          <p className="sidebar__step--sub">Step 1</p>
          <p className="sidebar__step--title">Your Info</p>
        </div>

        <div className="sidebar__step">
          <p className="sidebar__step--number">2</p>
          <p className="sidebar__step--sub">Step 2</p>
          <p className="sidebar__step--title">Select Plan</p>
        </div>
      </div>

      <div className="sidebar__step">
        <p className="sidebar__step--number">3</p>
        <p className="sidebar__step--sub">Step 3</p>
        <p className="sidebar__step--title">Add-ons</p>
      </div>

      <div className="sidebar__step">
        <p className="sidebar__step--number">4</p>
        <p className="sidebar__step--sub">Step 4</p>
        <p className="sidebar__step--title">Summary</p>
      </div>

      <div className="form">
        <h1 className="form__header">Personal Info</h1>
        <p className="form__sub">
          Please provide your name, email address, and phone number.
        </p>

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="phone">Phone Number</label>
          <input type="number" name="phone" id="phone" />
        </form>

        <button>Next Step</button>
      </div>
    </main>
  );
};

export default Form;
