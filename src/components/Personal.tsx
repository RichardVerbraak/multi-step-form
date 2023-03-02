import React from "react";

const Personal = () => {
  return (
    <form className="form__inputs">
      <div className="form-group">
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
      </div>
      <div className="form-group">
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
      </div>

      <div className="form-group">
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
      </div>
    </form>
  );
};

export default Personal;
