# Forms in React
Forms are an essential part of many web applications, and React provides powerful tools for handling form inputs, form state management, form validation, and form submission. This documentation will guide you through an example of form handling in React.

## Example

```javascript
import React, { useState } from "react";

function FormExample() {
  // Initialize form data and form errors state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Form submission logic
      console.log("Form submitted:", formData);
      // Reset form data and errors
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setFormErrors({});
    }
  };

  // Helper function for email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span>{formErrors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormExample;
```

## Usage
1. Import the `FormExample` component into your React application.
2. Place the `FormExample` component in your desired location within your component hierarchy.
3. Customize the form inputs, validation rules, and submission logic as per your requirements.

## Explanation
1. The `FormExample` component sets up the form state using the `useState` hook. It initializes the formData state with empty values for name, email, and password, and the `formErrors` state to track any validation errors.
2. The `handleChange` function updates the form data as the user types in the input fields, using the setFormData function provided by the `useState` hook.
3. The `handleSubmit` function is called when the form is submitted. It performs form validation by checking the form data and updating the `formErrors` state accordingly.
4. The form inputs are controlled components, meaning their values are derived from the `formData` state and their changes are handled by the handleChange function.
5. The form errors are conditionally rendered next to the respective input fields if there are any validation errors.
6. Upon successful form submission, the form data is logged to the console, and the form is reset by setting the `formData` state back to empty values and clearing the `formErrors` state.