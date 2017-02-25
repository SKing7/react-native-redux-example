React Native Redux Example
======================================================

## Description
This is a example repo for showing how to use Redux with React Native. This example makes a simple API call to the Dark Sky Api to display today's weather. [Here](https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3#.bultwm53oa) is an article explaning thenon redux way of doing something and comparing it to a redux version that is similar to the setup in this repo. Also check out the [Redux](http://redux.js.org/) docs.

## Pre Installation
Please follow `Installing Dependencies` section found [here](https://facebook.github.io/react-native/docs/getting-started.html)
Also follow the rest of the setup for both ios and android in order to have your environment ready to run the native app on a device or xcode / android avd

## Installation

```
$ git clone git@github.com:jmoses89/react-native-redux-example.git
$ cd react-native-redux-example
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
