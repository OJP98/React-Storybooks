import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import customTheme from './customTheme';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

addParameters({
  options: {
    theme: customTheme,
  },
});