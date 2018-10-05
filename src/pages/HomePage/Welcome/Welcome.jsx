/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import PageLoad from '_components/AnimationWrapper/PageLoad';
import Text from '_components/Text';
import SocialLinks from '../SocialLinks';

import mePhoto from '_images/me@2x.png';

import styles from './Welcome.scss';

const Welcome = ({
  className,
}) => (
  <div className={className} styleName="root">
    <div styleName="psevdo_grid">
      <PageLoad
        delayIn={150}
        duration={500}
        animationIn="fadeInDown"
      />
      <PageLoad
        delayIn={150}
        duration={500}
        animationIn="fadeInUp"
      />
      <PageLoad
        delayIn={150}
        duration={500}
        animationIn="fadeInDown"
      />
      <PageLoad
        delayIn={150}
        duration={500}
        animationIn="fadeInUp"
      />
      <PageLoad
        delayIn={150}
        duration={500}
        animationIn="fadeInDown"
      />
      <PageLoad
        delayIn={150}
        duration={500}
        animationIn="fadeInUp"
      />
    </div>
    <PageLoad styleName="photo" delayIn={600}>
      <img src={mePhoto} alt="Artem Konovalov" />
    </PageLoad>
    <div styleName="content">
      <PageLoad delayIn={500} animationIn="fadeInDownSmall">
        <div styleName="title">
          <Text
            color="white"
            tag="h1"
            size="large"
            fontWeight="bold"
            letterSpacing="-0.25px"
            textTransform="uppercase"
          >
            Artem
          </Text>
          <Text
            color="white"
            tag="h1"
            size="big"
            fontWeight="bold"
            letterSpacing="-0.65px"
            textTransform="uppercase"
          >
            Konovalov
          </Text>
        </div>
      </PageLoad>
      <PageLoad delayIn={550}>
        <Text
          color="white"
          tag="h2"
          size="medium-xl"
          fontWeight="medium"
          opacity="half"
        >
          Я  front-end разработчик!
        </Text>
      </PageLoad>
    </div>
    <div styleName="footerGradient" />
    <PageLoad
      delayIn={700} styleName="socialWrapper">
      <SocialLinks styleName="social" />
    </PageLoad>
  </div>
);

Welcome.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Welcome, styles);
