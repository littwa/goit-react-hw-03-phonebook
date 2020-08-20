import React from "react";
import { filterContainer, filterLabel, filterInput } from "./Filter.module.css";
import PropTypes from "prop-types";

let Filter = ({ handleChangeFilter, filter }) => {
 return (
  <section className={filterContainer}>
   <label className={filterLabel}>
    Find contacts by name
    <input
     className={filterInput}
     onChange={handleChangeFilter}
     value={filter}
     name="filter"
     type="text"
     autoComplete="off"
    />
   </label>
  </section>
 );
};

export default Filter;

Filter.propTypes = {
 handleChangeFilter: PropTypes.func.isRequired,
 filter: PropTypes.string
};
