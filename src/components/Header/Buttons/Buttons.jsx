import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import Animated from '_components/Animated';
import MenuIcon from '_components/Icons/Menu';
import Button from '_components/Button';
import PageLoad from '_components/AnimationWrapper/PageLoad';

import styles from './Buttons.scss';

const Buttons = ({
  onTogleMenu,
  menuStatus,
}) => (
  <div styleName="root">
    <PageLoad
      delayIn={1000}
      duration={400}
      animationIn="fadeInDown"
    >
      <Animated isVisible={menuStatus !== 'hidden'} duration={500} styleName="button">
        <Button onClick={onTogleMenu} >
          <MenuIcon status={menuStatus} />
        </Button>
      </Animated>
    </PageLoad>
  </div>
);

Buttons.propTypes = {
  onTogleMenu: PropTypes.func.isRequired,
  menuStatus: PropTypes.string,
};

export default CSSModules(Buttons, styles, { allowMultiple: true });
