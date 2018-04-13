import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = (props) => {
  const {page, totalPages, handlePaginationClick} = props;
  return (<div className="Pagination">
    <button
      className="Pagination-button"
      onClick = {() => handlePaginationClick('back')}
    >
      &larr;
    </button>
    <span className="Pagination-info">
      page
      <b> {page}</b> of <b>{totalPages}</b>
    </span>
    <button
      className="Pagination-button"
      onClick = {() => handlePaginationClick('next')}
    >
      &rarr;
    </button>
  </div>);
}

export default Pagination
