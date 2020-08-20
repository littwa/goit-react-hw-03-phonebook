import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import IsAlreadyTrue from "./IsAlreadyTrue/IsAlreadyTrue";
import animation from "./Appanimation.module.css";
import animationIsAlready from "./IsAlreadyTrue/isAlreadyTrueAnimation.module.css";
import FilterAnimation from "./Filter/FilterAnimation.module.css";

class App extends Component {
 state = {
  contacts: [],
  filter: "",
  isAlready: false
 };

 componentDidMount() {
  let localStorContacts = JSON.parse(localStorage.getItem("contacts"));
  localStorContacts && this.setState({ contacts: localStorContacts });
 }

 componentDidUpdate(prevProps, prevState) {
  if (this.state.contacts !== prevState.contacts) {
   localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
 }

 addContact = (name, number) => {
  if (this.state.contacts.find(contact => name === contact.name)) {
   this.setState({ isAlready: true });
   return;
  }

  const contact = {
   id: uuidv4(),
   name,
   number
  };

  this.setState(prevState => {
   return {
    contacts: [...prevState.contacts, contact]
   };
  });
 };

 changeIsAlready = () => {
  this.setState({ isAlready: false });
 };

 handleChangeFilter = e => {
  e.persist();
  // let { value } = e.target;
  this.setState(() => {
   return { filter: e.target.value };
  });
 };

 contactsForRenderAndFilter = () => {
  const { contacts, filter } = this.state;
  return contacts.filter(contacts => contacts.name.toLowerCase().includes(filter.toLowerCase()));
 };

 deleteContact = onId => {
  this.setState(() => {
   return {
    contacts: this.state.contacts.filter(contact => contact.id !== onId)
   };
  });
 };

 render() {
  let contactsArrayFiltered = this.contactsForRenderAndFilter();

  return (
   <>
    <CSSTransition
     in={this.state.isAlready === true}
     timeout={300}
     classNames={animationIsAlready}
     unmountOnExit
    >
     <IsAlreadyTrue onChangeIsAlready={this.changeIsAlready} />
    </CSSTransition>

    <div className={animation.container}>
     <CSSTransition in={true} appear={true} timeout={1000} classNames={animation} unmountOnExit>
      {stage => {
       console.log(stage);
       return (
        <>
         <h1 className={animation.title}>Phonebook</h1>
         <CSSTransition in={stage === "entered"} timeout={300} classNames={animation} unmountOnExit>
          <p className={animation.p}> &#9742;</p>
         </CSSTransition>
        </>
       );
      }}
     </CSSTransition>

     <ContactForm addContact={this.addContact} />

     <CSSTransition
      in={this.state.contacts.length > 1}
      timeout={300}
      classNames={FilterAnimation}
      unmountOnExit
     >
      <Filter handleChangeFilter={this.handleChangeFilter} filter={this.state.filter} />
     </CSSTransition>

     <ContactList contacts={contactsArrayFiltered} deleteContact={this.deleteContact} />
    </div>
   </>
  );
 }
}

export default App;
