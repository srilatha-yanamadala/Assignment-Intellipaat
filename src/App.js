import React, { useReducer, useState } from "react";
import "./App.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      message: event.target.message,
      value: event.target.value,
    });
  };

  return (
    <div className="wrapper">
      {" "}
      <form onSubmit={handleSubmit}>
        <h2>User Form</h2>
        <fieldset>
          <label key="idx">
            Name :
            <input name="name" onChange={handleChange} />
          </label>
          <br />
          <br />
          <label>
            Message :
            <textarea message="message" onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <br></br> <hr />
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>{value.toString()}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
