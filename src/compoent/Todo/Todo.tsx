import { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  state = {
    input: "",
    iteam: [],
  };

  onhanding = (event: any) => {
    this.setState({ input: event.target.value });
  };
  onSubmithander = (event: any) => {
    event.preventDefault();
    const { input, iteam } = this.state;
    this.setState({ iteam: [...iteam, input], input: "" });
  };
  deleteIteam = (key: any) => {
    const { iteam } = this.state;
    const allIteam = iteam;
    allIteam.splice(key, 1);
    this.setState({ iteam: allIteam });
  };

  render() {
    console.log(this.state.iteam);
    const { iteam, input } = this.state;
    return (
      <div className="Todo-section">
        <form className="input-Secton" onSubmit={this.onSubmithander}>
          <h1>Todo List</h1>
          <input
            type="text"
            value={input}
            onChange={this.onhanding}
            placeholder="Enter the iteam...."
          />
        </form>
        <ul>
          {iteam.map((value, index) => (
            <li key={index}>
              {value}
              <i
                className="fa-solid fa-trash-can"
                onClick={() => this.deleteIteam(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Todo;
