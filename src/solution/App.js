import { useState } from "react";
import { checkFirstName } from "./lib/validationFunctions";

function App() {
  const [variable, updateVariable] = useState(false);
  const [firstNameValid, setfirstNameValid] = useState(false);
  const [firstNameValue, setFirstNameValue] = useState("");
  const [nameList, setNameList] = useState();

  return (
    <>
      <h1>Dom practice</h1>
      <div>
        <h3>Buttons</h3>
        <p>Click the button to display your name</p>
        <p>Your name is: {variable && "Aaron"}</p>
        <button
          onClick={() => {
            updateVariable(!variable);
          }}
        >
          {variable ? "Hide" : "Show"}
        </button>
      </div>
      <div>
        <h3>Validate</h3>
        <p>Validate the text box to be at least 3 characters.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNameList(firstNameValue);
          }}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={(e) => {
              setFirstNameValue(e.target.value);
              setfirstNameValid(checkFirstName(firstNameValue));
            }}
            id="firstName"
            type="text"
          />
          <p>{firstNameValid ? "Valid" : "Invalid"}</p>
          {firstNameValid && <p>hi there</p>}
          <button type="submit">Submit</button>
        </form>
        <ul>
          <li key="1">{nameList}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
