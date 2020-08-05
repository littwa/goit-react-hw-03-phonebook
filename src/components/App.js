import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (name, number) => {
    if (this.state.contacts.find((contact) => name === contact.name)) {
      alert(name + " is already in contacts");
      return;
    }
    console.log(this.state.contacts);
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  handleChangeFilter = (e) => {
    e.persist();
    // let { value } = e.target;
    this.setState(() => {
      return { filter: e.target.value };
    });
  };

  contactsForRenderAndFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contacts) => contacts.name.toLowerCase().includes(filter.toLowerCase()));
  };

  deleteContact = (onId) => {
    console.dir(onId);
    this.setState(() => {
      return {
        contacts: this.state.contacts.filter((contact) => contact.id !== onId),
      };
    });
  };

  render() {
    let contactsArrayFiltered = this.contactsForRenderAndFilter();

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
          <h2>Contacts</h2>
          {this.state.contacts.length > 1 && <Filter handleChangeFilter={this.handleChangeFilter} filter={this.state.filter} />}
          <ContactList contacts={contactsArrayFiltered} deleteContact={this.deleteContact} />
        </div>
      </>
    );
  }
}

export default App;
