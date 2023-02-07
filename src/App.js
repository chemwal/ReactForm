import React, { useEffect, useState } from 'react';
function App() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!values.username) {
      errors.username = 'username is required!';
    }
    if (!values.email) {
      errors.email = 'E-Mail is required!';
    } else if (!re.test(values.email)) {
      errors.email = 'This is not valid format';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    }
    if (!values.password2) {
      errors.password2 = 'Confirm Password is required!';
    }
    return errors;
  };
  return (
    <div className="container">
      <pre>{JSON.stringify(formValues)}</pre>
      <form id="form" className="form" onSubmit={handleSubmit}>
        <h2>Register with Us</h2>
        <div className="form-control">
          <label htmlFor="usernmae">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter UserName"
            value={formValues.username}
            onChange={handleChange}
          />
          <p>{formErrors.username}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>
        </div>
        <div className="form-control">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            placeholder="Confirm Password"
            value={formValues.password2}
            onChange={handleChange}
          />
          <p>{formErrors.password2}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
