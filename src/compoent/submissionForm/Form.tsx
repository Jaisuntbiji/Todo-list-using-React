import { Component } from "react";
import "./Form.css";

export default class Form extends Component {

  render() {
    return (
      <div className="main-section">
        <form className="form-section">
          <h1>Form in React</h1>
          <div className="text-section">
            <p>Firstname*</p>
            <input type="text" />
            <p>Lastname</p>
            <input type="text" />
            <p>Enter Email</p>
            <input type="email" />
            <p>Contact</p>
            <input type="number" />
          </div>
          <div className="Gender-section">
            <p>Gender*</p>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          </div>
          <div className="subject-section">
            <p>Subject You Know</p>
            <input type="checkbox" />
            <label>English</label>
            <input type="checkbox" />
            <label>Hindi</label>
            <input type="checkbox"></input>
            <label>Malayalm</label>
          </div>
          <p>Upload the Cv</p>
          <input type="file" />
          <p>About</p>
          <input className="about-section" />
          <br />
          <input type="submit" className="sub" />
          <input type="reset" className="sub"/>
        </form>
      </div>
    );
  }
}
