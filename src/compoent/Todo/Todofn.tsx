import { useState, useEffect } from "react";
import "./Todo.css";

const Todofn = () => {
  const [input, setInput] = useState("");
  const [iteam, setIteam] = useState([]);

  const onChnageHandle = (event: any) => {
    setInput(event.target.value);
  };
  const onsubmitHandle = (event: any) => {
    event.preventDefault();
    setIteam([...iteam, input]);
    setInput("");
  };
  const clearH = () => {
    const allIteam1 = iteam;
    allIteam1.splice(index,1);
    setIteam(allIteam1);
  };
  return (
    <div>
      <div className="Todo-section">
        <form className="input-Secton" onSubmit={onsubmitHandle}>
          <h1>Todo List</h1>
          <input
            type="text"
            value={input}
            onChange={onChnageHandle}
            placeholder="Enter the iteam...."
          />
        </form>
        <ul>
          {iteam.map((value, index) => (
            <li key={index}>
              {value}
              <button onClick={() => clearH(index)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todofn;
