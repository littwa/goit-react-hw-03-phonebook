import React from "react";
import { filterComp } from "./Filter.module.css";
import PropTypes from "prop-types";

let Filter = ({ handleChangeFilter, filter }) => {
  return (
    <section>
      <label>
        Find contacts by name
        <input className={filterComp} onChange={handleChangeFilter} value={filter} name="filter" type="text" autoComplete="off" />
      </label>
    </section>
  );
};

export default Filter;

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
