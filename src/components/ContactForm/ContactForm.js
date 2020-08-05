import React from "react";
import { formcont, fc } from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func,
  };

  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state.name, this.state.number);
    this.setState(() => {
      return { name: "", number: "" };
    });
  };

  handleChange = (e) => {
    let { value, name } = e.target;

    this.setState(() => {
      return { [name]: value };
    });
  };

  render() {
    return (
      <form className={formcont} onSubmit={this.handleSubmit}>
        <label className={fc}>
          Name
          <input className={fc} onChange={this.handleChange} value={this.state.name} name="name" type="text" autoComplete="off" required />
        </label>
        <label className={fc}>
          Number
          <input className={fc} onChange={this.handleChange} value={this.state.number} name="number" type="tel" autoComplete="off" maxLength="10" />
        </label>
        <button className={fc}>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

//= ({ addContact, handleChange, name, number }) =>
