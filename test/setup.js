// @flow

import {jsdom} from 'jsdom';

// The following code allows us to use enzyme's "mount" (without running in an actual browser).
global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});
global.navigator = {
  userAgent: 'node.js',
};
