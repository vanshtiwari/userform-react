import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [info, setInfo] = useState({});
  // const [users, setUsers] = useState({});
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const onChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Update the document title using the browser API
    document.title = info.name;
  });

  const onSubmit = e => {
    e.preventDefault();
    setUsers([...users, { ...info }]);
    console.log(info, "info onSubmit");
    console.log(users, "users");
    setInfo({});
  };

  return (
    <>
      Hello
      <br />
      bro
      <Form
        info={info}
        errors={errors}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
}

const Field = ({ label = "", name = "", value = "", onChange, error }) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} value={value} onChange={onChange} />
      <span className="error">{error}</span>
    </div>
  );
};

const Form = ({ info, errors, onChange, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset>
        <Field
          name="name"
          label="name"
          value={info.name}
          onChange={onChange}
          error={errors.name}
        />
        <Field
          name="address"
          label="address"
          value={info.address}
          onChange={onChange}
          error={errors.address}
        />
        <Field
          name="mobile"
          label="mobile"
          value={info.mobile}
          onChange={onChange}
          error={errors.mobile}
        />
        <Field
          name="college"
          label="college"
          value={info.college}
          onChange={onChange}
          error={errors.college}
        />
      </fieldset>
      <button>click me</button>
    </form>
  );
};
