import React, { useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log("value", value) // It will log every state change

  return <input type="text" value={value} onChange={handleChange} />;
}

export default Input;
