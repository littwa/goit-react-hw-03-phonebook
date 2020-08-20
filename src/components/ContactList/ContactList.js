import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import style from "./ContactListStyl.module.css";

import animitem from "./ContactListAnimation.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

let ContactList = ({ contacts, deleteContact }) => (
 <section>
  <TransitionGroup component="ul" className={style.list}>
   {contacts.map(el => (
    <CSSTransition key={el.id} timeout={200} classNames={animitem}>
     <ContactListItem el={el} delCont={() => deleteContact(el.id)} />
    </CSSTransition>
   ))}
  </TransitionGroup>
 </section>
);

export default ContactList;

ContactList.propTypes = {
 contacts: PropTypes.array.isRequired,
 deleteContact: PropTypes.func.isRequired
};
