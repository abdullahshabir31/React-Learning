import { useState } from "react";

function CheckboxAndRadio() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [gender, setGender] = useState("");

  return (
    <div>
      <h1>Checkbox and Radio</h1>

      <label>
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={(event) => setIsAgreed(event.target.checked)}
        />
        I agree to the terms
      </label>

      <h3>Gender</h3>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(event) => setGender(event.target.value)}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(event) => setGender(event.target.value)}
        />
        Female
      </label>

      <p>Agreed: {isAgreed ? "Yes" : "No"}</p>
      <p>Gender: {gender || "Not selected"}</p>
    </div>
  );
}

export default CheckboxAndRadio;
