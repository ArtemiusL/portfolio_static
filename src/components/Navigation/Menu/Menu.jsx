/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { NavLink, withRouter } from 'react-router-dom';

import getActiveRouteIndex from '../utils/getActiveRouteIndex';

import Animated from '_components/Animated';

import SnpSlider from '_components/SnpSlider';
import Text from '_components/Text';

import styles from './Menu.scss';

const Menu = (props) => {
  const {
    location,
    navigation,
    activeMenu,
    pageAnimation,
    sliderRef,
  } = props;

  const createNav = (nav, i) => (
    <div key={nav.link} styleName="slideTitle">
      <Animated
        animateOnMount
        isVisible={activeMenu}
        animationIn="fadeInDownSmall"
        animationOut={pageAnimation ? 'fadeOutDownSmall' : 'fadeOutUpSmall'}
        duration={pageAnimation ? 350 : 500}
        delay={{
          in: 300 + (i * 80),
          out: pageAnimation ? 300 - (i * 50) : 400 - (i * 80),
        }}
      >
        {!nav.target ? (
          <NavLink
            exact
            to={nav.link}
            activeClassName={styles.active}
          >
            <Text
              tag="span"
              size="large"
              fontWeight="semi-bold"
              hover="white-to-black"
            >
              {nav.title}
            </Text>
          </NavLink>
        ) : (
          <a
            href={nav.link}
            target="blank"
          >
            <Text
              tag="span"
              size="large"
              fontWeight="semi-bold"
              hover="white-to-black"
            >
              {nav.title}
            </Text>
          </a>
        )}
      </Animated>
    </div>
  );

  const navList = navigation.map(createNav);

  // const defaultSlide = getActiveRouteIndex(location.pathname, navigation);

  return (
    <div styleName="root">
      <SnpSlider
        styleName="slider"
        separatorClassName={styles.separate}
        noControls
        multislider
        withBorders
        disableOnSlide={false}
        // defaultSlide={defaultSlide}
        sliderRef={sliderRef}
      >
        <div styleName="conpinsation" />
        {navList}
        <div styleName="border" />
      </SnpSlider>
    </div>
  );
};

Menu.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
  activeMenu: PropTypes.bool,
  pageAnimation: PropTypes.bool,
  location: PropTypes.object,
  sliderRef: PropTypes.func,
};

export default withRouter(CSSModules(Menu, styles));
