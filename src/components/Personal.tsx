import React from "react";

const Personal = () => {
  return (
    <>
      <header className="form__header">
        <h1 className="form__header--title">Personal Info</h1>
        <p className="form__header--sub">
          Please provide your name, email address, and phone number.
        </p>
      </header>

      <form className="form-personal">
        <div className="form-personal__group">
          <label className="form-personal__group--label" htmlFor="name">
            Name
          </label>
          <input
            className="form-personal__group--input"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
          />
        </div>

        <div className="form-personal__group">
          <label className="form-personal__group--label" htmlFor="email">
            Email Address
          </label>
          <input
            className="form-personal__group--input"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
        </div>

        <div className="form-personal__group">
          <label className="form-personal__group--label" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="form-personal__group--input"
            type="number"
            name="phone"
            id="phone"
            placeholder="e.g + 1 234 567 890"
          />
        </div>
      </form>
    </>
  );
};

export default Personal;
