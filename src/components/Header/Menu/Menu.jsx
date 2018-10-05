/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { Grid, GridRow, GridColumn } from '_components/Grid/desktop';

import ReactTransition from '_components/ReactTransitionGroup/ReactTransition';
import MenuParagraph from '_components/AnimationWrapper/MenuParagraph';
import Animated from '_components/Animated';

import SocialLinks from '_components/SocialLinks';
import Navigation from '_components/Navigation';
import Locations from '_components/Locations';
import Copyright from '_components/Copyright';
import Text from '_components/Text';
import Button from '_components/Button';

import About from './About';

import styles from './Menu.scss';

const Menu = ({ activeMenu, pageAnimation }) => (
  <ReactTransition
    isVisible={activeMenu}
    timeout={1000}
    unmountOnExit
  >
    <Animated
      isVisible={activeMenu}
      animationIn="slideInDown"
      animationOut={!pageAnimation ? 'slideOutUp' : 'slideOutDown'}
      easingShape="cubic-bezier(0.215, 0.61, 0.355, 1)"
      duration={!pageAnimation ? 400 : 300}
      delay={{
        in: 0,
        out: !pageAnimation ? 700 : 550,
      }}
      styleName="root"
    >
      <Grid>
        <GridRow fullWindow rows={2} />
        <GridRow fullWindow rows={2}>
          <GridColumn columns={12} position="left center">
            <Navigation
              type="menu"
              activeMenu={activeMenu}
              pageAnimation={pageAnimation}
            />
          </GridColumn>
        </GridRow>
        <GridRow fullWindow />
        <GridRow fullWindow className={styles.wrapperParagrafs}>
          <GridColumn columns={2} />
          <GridColumn columns={4}>
            <About
              activeMenu={activeMenu}
              pageAnimation={pageAnimation}
            />
          </GridColumn>
          <GridColumn columns={1} />
          <GridColumn columns={4} position="between top">
            <div>
            <MenuParagraph
              pageAnimation={pageAnimation}
              isVisible={activeMenu}
              delayIn={500}
            >
              <Text
                styleName="header"
                tag="h6"
                size="normal"
                fontWeight="semi-bold"
                letterSpacingSize="big"
                color="black"
              >
                Хочется посмотреть код?
              </Text>
            </MenuParagraph>
            <MenuParagraph pageAnimation={pageAnimation}
                isVisible={activeMenu}
                delayIn={500}>
              <Button
                styleName="button"
                href="https://github.com/ArtemiusL/avito"
                // hover="opacity"
                target="blank"
              >
                <Text
                  tag="span"
                  size="normal"
                  fontWeight="normal"
                  color="black"
                >
                  Хороший пример
                </Text>
              </Button>
            </MenuParagraph>
            </div>
          </GridColumn>
          <GridColumn columns={2} />
        </GridRow>
        <GridRow fullWindow rows={2}>
          <GridColumn columns={12} position="left bottom">
            <MenuParagraph
              pageAnimation={pageAnimation}
              isVisible={activeMenu}
              delayIn={600}
            >
              <Copyright />
            </MenuParagraph>
          </GridColumn>
        </GridRow>
      </Grid>
    </Animated>
  </ReactTransition>
);

Menu.propTypes = {
  activeMenu: PropTypes.bool.isRequired,
  pageAnimation: PropTypes.bool.isRequired,
};

export default CSSModules(Menu, styles);
