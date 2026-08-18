import { useState } from "react";

function SelectAndTextarea() {
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Select and Textarea</h1>

      <select
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      >
        <option value="">Select Country</option>
        <option value="Pakistan">Pakistan</option>
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
      </select>

      <br />
      <br />

      <textarea
        placeholder="Write your message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        rows="5"
      />

      <p>Country: {country || "Not selected"}</p>
      <p>Message: {message}</p>
    </div>
  );
}

export default SelectAndTextarea;
