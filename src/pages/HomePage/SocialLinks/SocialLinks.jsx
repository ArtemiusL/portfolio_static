/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Text from '_components/Text';
import WithHoverUnderline from '_components/WithHoverUnderline';

import styles from './SocialLinks.scss';

const content = [
  {
    title: 'vkontakte',
    link: 'https://vk.com/id22256899',
  },
  {
    title: 'telegram',
    link: 'https://t-do.ru/konovalio'
  },
  {
    title: 'email',
    link: 'lamber95@icloud.com',
  },
  {
    title: 'github',
    link: 'https://github.com/ArtemiusL',
  },
];

const SocialLinks = ({
  className,
  children,
  ...props
}) => {
  const handleClick = (evt) => { console.log(evt.target) }

  return (
    <div styleName="center">
      <div className={className} styleName="root">
        {content.map(item => (
          <WithHoverUnderline
            key={item.title}
            theme="white"
            styleName="hover"
          >
            <Text
              styleName="item"
              textTransform="uppercase"
              size="small"
            >
              <a target={item.title === 'email' ? '' : 'blank'} href={item.title === 'email' ? `mailto:${item.link}` : item.link}>
                {item.title}
              </a>
            </Text>
          </WithHoverUnderline>
        ))}
      </div>
    </div>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

SocialLinks.defaultProps = {
  type: 'button',
};

export default CSSModules(SocialLinks, styles);
