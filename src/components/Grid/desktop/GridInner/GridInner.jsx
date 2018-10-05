import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './GridInner.scss';

const GridInner = ({ children, className }) => (
  <div className={className} styleName="root">{children}</div>
);

GridInner.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CSSModules(GridInner, styles);
