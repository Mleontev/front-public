/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as schemas from 'r/schemas';
import CatalogFilter from './CatalogFilter';

class CatalogFilterContainer extends Component {
  render() {
    return <CatalogFilter {...this.props} />;
  }
}

CatalogFilterContainer.propTypes = {
  filterName: PropTypes.string,
  filterUrl: PropTypes.string.isRequired,
  isFilterToggleVisible: PropTypes.bool,
  options: PropTypes.arrayOf(schemas.catalogFilterOption).isRequired,
  params: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
  selectedOptions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  t: PropTypes.func.isRequired,
};

CatalogFilterContainer.defaultProps = {
  filterUrl: '',
  isFilterToggleVisible: true,
  options: [],
  params: {},
  selectedOptions: [],
};

export default CatalogFilterContainer;
export { CatalogFilter };
