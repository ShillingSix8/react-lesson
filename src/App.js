import { useState } from 'react';

function App() {
  
  const [variable, updateVariable] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [userInput, setUserInput] = useState('');

  return(
    <>
      <h1>Dom practice</h1>
      
      <h2>Button</h2>
      <p>Click button to display name</p>
      <button onClick={() => {
        updateVariable(!variable);
      }}>Click Me</button>
      <p>Your name is: {variable && 'Benjamin'}</p>

      <h2>Input</h2>
      <p>When I click the button, I want to add whatever is in the input into a new list item.</p>
      <form onSubmit={(e) => {
     e.preventDefault();
     setTaskList([...taskList, userInput]);
   }}>
     <label htmlFor='task'>Add a Task</label>
     <input id="task" onChange={(e) => setUserInput(e.target.value)}
     />
     <button>Add</button>
   </form>

<ul>
  {taskList.map((item) => 
  <li key={item}>{item}</li>
  )}
</ul>


    </>
  );
}

export default App;
