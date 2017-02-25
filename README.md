React Native REdux Exanmple
======================================================

## Stack Information
- [React Native](https://facebook.github.io/react-native/): app framework
- [Redux](http://redux.js.org/): predictable state container
- [ESLint](http://eslint.org/): code rules and linting
- [Flow](https://flowtype.org/): static type checking
- [React Native Storybook](https://github.com/storybooks/react-native-storybook): isolated component development
- [Jest](https://facebook.github.io/jest/): testing framework
- [Enzyme](https://github.com/airbnb/enzyme): react testing utility


## Pre Installation
Please follow `Installing Dependencies` section found [here](https://facebook.github.io/react-native/docs/getting-started.html)
Also follow the rest of the setup for both ios and android in order to have your environment ready to run the native app on a device or xcode / android avd

## Installation

```
$ git clone https://github.com/bighuman/cookn-app.git
$ cd cookn-app
$ npm install
```

## Development

```
// For IOS
react-native run-ios

// For Android
react-native run-android
```
* Go to [http://localhost:3000/](http://localhost:3000/)
* Page should auto-reload on code changes (due to HMR)

## Storybook

// TBD
## Testing
This application uses Jest + Enzyme for its testing stack

To run all tests
```
npm run test
```

To run all tests in watch mode
```
npm run test:watch
```

### Overall Setup
Jest will run all tests found in a `__tests__` directory. the convention for this code base is to place these test directories with the module in which they are testing. Another convention is to suffix test files with `-test.js`
```
// components/TestComponent/test-component.js
class TestComponent extends Component {
  ...code...
}
```

```
// components/TestComponent/__tests__/test-component-test.js
describe('TestComponent', () => {
  ...Tests go here...
})
```

### Writing Tests
```js
// component-test.js

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TestComponent from '../TestComponent';

describe('TestComponent', () => {
  it('should render with props',  () => {
    const props = {
      name: 'TestComponent Name'
    };
    const tree = toJson(
      shallow(<Component {...props} />)
    );

    expect(tree).toMatchSnapshot()
  });
});
```


## License

[MIT](http://opensource.org/licenses/MIT)

Brought to you by Jarret Moses
