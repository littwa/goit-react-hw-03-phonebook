import React from "react";
import { btn, itemLi, itemP, itemSpan } from "./ContactListItem.module.css";
import PropTypes from "prop-types";

let ContactListItem = ({ el, delCont }) => (
 <li className={itemLi}>
  <span className={itemP}>{el.name}:</span>
  <p>
   <span className={itemSpan}>{el.number}</span>
   <button className={btn} onClick={delCont}>
    &#10006;
   </button>
  </p>
 </li>
);

export default ContactListItem;

ContactListItem.propTypes = {
 el: PropTypes.object.isRequired,
 delCont: PropTypes.func.isRequired
};
