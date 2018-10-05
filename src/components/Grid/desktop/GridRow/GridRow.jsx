import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import React, { PureComponent } from 'react';

import viewportHOC from '_hocs/viewport';
import getTemplate from '_utils/getTemplateFromViewport';

import {
  MAX_ROWS,
  BORDER_VERTICAL,
  TABLET_BORDER_VERTICAL,
  MOBILE_BORDER_VERTICAL,
  DESKTOP_HEIGHT_REM,
  TABLET_HEIGHT_REM,
  MOBILE_HEIGHT_REM,
} from '../constants';

import styles from './GridRow.scss';

@CSSModules(styles)
class GridRow extends PureComponent {
  getBorderVertical = () => getTemplate(
    this.props.viewport,
    BORDER_VERTICAL,
    TABLET_BORDER_VERTICAL,
    MOBILE_BORDER_VERTICAL,
  );

  getHeightRem = () => getTemplate(
    this.props.viewport,
    DESKTOP_HEIGHT_REM,
    TABLET_HEIGHT_REM,
    MOBILE_HEIGHT_REM,
  );

  getHeight() {
    const { rows, fullWindow } = this.props;

    if (fullWindow) {
      return (100 / MAX_ROWS) * rows;
    }

    const heightRem = this.getHeightRem();

    return heightRem * rows;
  }

  render() {
    const {
      withoutHeight,
      fullWindow,
      children,
      rows,
      className,
    } = this.props;

    const height = this.getHeight();
    const borderVertical = this.getBorderVertical();
    const borderCompensation = ((borderVertical * 2) / MAX_ROWS) * rows;
    const rowStyles = {
      height: fullWindow ? `calc(${height}vh - ${borderCompensation}px)` : `${height}rem`,
    };

    return (
      <div className={className} styleName="root" style={!withoutHeight ? rowStyles : null}>
        {children}
      </div>
    );
  }
}

GridRow.propTypes = {
  className: PropTypes.string,
  withoutHeight: PropTypes.bool,
  fullWindow: PropTypes.bool,
  rows: PropTypes.number,
  children: PropTypes.any,
  viewport: PropTypes.string,
};

GridRow.defaultProps = {
  rows: 1,
  fullWindow: false,
};

export default viewportHOC(GridRow);
