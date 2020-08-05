import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";

let ContactList = ({ contacts, deleteContact }) => (
  <section>
    <ul>
      {contacts.map((el) => (
        <ContactListItem key={el.id} el={el} delCont={() => deleteContact(el.id)} />
      ))}
    </ul>
  </section>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
