import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items ,setItems ] = useState([]);


  function handleChange(event)
   {
    const newValue =event.target.value; 
    setInputText(newValue);
   }

   function addItem() {
     setItems((prevItems) => {
       return([...prevItems,inputText]);
     })
     setInputText("");
   }

   return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         {items.map((toDoItem)=><li>{toDoItem}</li>)
        }
        
        </ul>
      </div>
    </div>
  );
}

export default App;
