import React, { Component, PropTypes } from 'react';
import PaginationCurrentWindow from './PaginationCurrentWindow';
import uri from 'urijs';

export const WINDOW_SIZE = 4;

class Pagination extends Component {
  getPageHref(page) {
    return uri(window.location.href).setSearch('page', page);
  }
  render() {
    const {
      currentPage,
      totalPages,
    } = this.props;

    return (
      <nav className="pagination">
        {currentPage > 1 && (
          <span className="first">
            <a href={this.getPageHref(1)}>
              {'&laquo;'}
            </a>
          </span>
        )}
        {' '}
        {currentPage - 1 > 0 && (
          <span className="prev">
            <a href={this.getPageHref(currentPage - 1)}>
              {'‹'}
            </a>
          </span>
        )}
        {' '}
        {(currentPage > WINDOW_SIZE + 1) && (
          <span className="page gap">
            {'\u2026'}
          </span>
        )}
        {' '}
        <PaginationCurrentWindow
          currentPage={currentPage}
          getPageHref={this.getPageHref}
          totalPages={totalPages}
        />
        {' '}
        {(currentPage + WINDOW_SIZE < totalPages) && (
          <span className="page gap">
            {'\u2026'}
          </span>
        )}
        {' '}
        {currentPage + 1 <= totalPages && (
          <span className="next">
            <a href={this.getPageHref(currentPage + 1)}>
              {'›'}
            </a>
          </span>
        )}
        {' '}
        {currentPage != totalPages && (
          <span className="last">
            <a href={this.getPageHref(totalPages)}>
              {'&raquo;'}
            </a>
          </span>
        )}
      </nav>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
