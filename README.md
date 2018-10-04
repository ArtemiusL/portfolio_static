## Getting Started

**1. You can start by cloning the repository on your local machine by running:**

```bash
git clone https://github.com/snphq/react-starter-boilerplate
cd react-starter-boilerplate
```

**2. Install all of the dependencies:**

```bash
yarn
```

**3. Build app for first for producing correct webpack-assets.json:**

```bash
yarn build
```

**3. Start to run it:**

```bash
yarn start:production    # Building bundle and running production server
```

Now the app should be running at [http://localhost:8080/](http://localhost:8080/)


## NPM Script Commands

`yarn <script>`|Description
------------------|-----------
`start`|Run your app on the development server at `localhost:3000`. HMR will be enabled.
`start:production`|Bundle files to `./public/assets` and run it on the production server at `localhost:8080`.
`start:prod`|Run your app on the production server only at `localhost:8080`.
`build`|Remove the previous bundled files and bundle it to `./public/assets`.
`lint`|Lint all `.js` and `.scss` files.
`lint:js`|Lint all `.js` files.
`lint:style`|Lint all `.scss` files.
`clean:all`|Remove the client/server bundled stuff and the coverage report.
`clean:build`|Remove the `./public/assets` folder to clean the client bundled files.


## Code Style

##### Classnames

e.g.
```
<div className={classnames('root', styles[type])}>{content}</div>
```

##### propTypes order

1. String
2. Numbers
3. Bools
4. oneOf, oneOfType
5. Arrays
6. Objects (use shape if possible)
7. Rest except children and functions
8. children
9. functions

e.g.
```js
Screen.propTypes = {
  id: PropTypes.string,
  num: PropTypes.number,
  isOpen: PropTypes.bool,
  contentPosition: PropTypes.oneOf(['middle', 'bottom']),
  elements: PropTypes.arrayOf(PropTypes.string),
  scrollObserver: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  background: PropTypes.func,
  content: PropTypes.func,
};
```

##### Imports

###### Import order

1. Absolute imports
2. Imports from other project folders (by aliases). Components - at the end of list
3. Relative imports
4. Styles

 e.g.
```js
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

import { NAV_ITEMS_PRIMARY, NAV_ITEMS_SECONDARY } from '_constants';

import browserHOC from '_hocs/browserHOC';
import viewportHOC from '_hocs/viewportHOC';

import Logo from '_components/Logo';
import Text from '_components/Text';

import NavItem from './NavItem';

import styles from './Navigation.scss';
```

##### React subcomponents importing

Import only full React object. Invoke subcomponents from React

e.g
```
import React from 'react';

...extends React.PureComponent

...React.Fragment
```

##### JS collections methods

1. Use native ```map```, ```reduce```, ```filter```, ```some```, ```find```
2. Other methods - from lodash

##### Comments

Always use multiline comments

##### Styles

Use camelCase for classnames. For modifiers use hyphens.

e.g.

```css
.contentPosition {
    &-middle {
      width: auto;
      margin-left: 8%;
      margin-right: 8%;
      top: 50%;
      transform: translate(0, -50%);
    }

    &-bottom {
      left: 100px;
      bottom: 100px;
    }
  }
}

.additionalContent {
  position: absolute;
}
```
