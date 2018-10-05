import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Grid.scss';

const Grid = ({
  className,
  children,
  innerRef,
  withoutBottom,
  withoutTop,
  style,
}) => (
  <div
    styleName={`root ${withoutBottom ? 'without-bottom' : ''} ${withoutTop ? 'without-top' : ''}`}
    className={className}
    style={style}
    ref={innerRef}
  >
    {children}
  </div>
);

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  innerRef: PropTypes.func,
  withoutBottom: PropTypes.bool,
  withoutTop: PropTypes.bool,
  style: PropTypes.any,
};

export default CSSModules(Grid, styles, { allowMultiple: true });
