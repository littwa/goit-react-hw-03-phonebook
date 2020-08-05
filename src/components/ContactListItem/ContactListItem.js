import React from "react";
import { itemComp, itemLi } from "./ContactListItem.module.css";
import PropTypes from "prop-types";

let ContactListItem = ({ el, delCont }) => (
  <li className={itemLi}>
    {el.name}: {el.number}
    <button className={itemComp} onClick={delCont}>
      Delete
    </button>
  </li>
);

export default ContactListItem;

ContactListItem.propTypes = {
  el: PropTypes.object.isRequired,
  delCont: PropTypes.func.isRequired,
};
