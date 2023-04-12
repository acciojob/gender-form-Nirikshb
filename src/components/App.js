import React, { useState } from "react";

function GenderForm() {
  const [gender, setGender] = useState("");
  const [shirtSize, setShirtSize] = useState("");
  const [dressSize, setDressSize] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleShirtSizeChange = (e) => {
    setShirtSize(e.target.value);
  };

  const handleDressSizeChange = (e) => {
    setDressSize(e.target.value);
  };

  return (
    <div>
      <h2>Gender Form</h2>
      <label>
        Gender:
        <select value={gender} onChange={handleGenderChange}>
          <option value="">Please select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <br />
      {gender === "Male" && (
        <label>
          Shirt Size:
          <select value={shirtSize} onChange={handleShirtSizeChange}>
            <option value="">Please select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
      )}
      {gender === "Female" && (
        <label>
          Dress Size:
          <select value={dressSize} onChange={handleDressSizeChange}>
            <option value="">Please select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
      )}
    </div>
  );
}

export default GenderForm;
