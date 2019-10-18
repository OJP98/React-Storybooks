import React from 'react';
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo';
import Background from '../src/Background/Background.jsx';

storiesOf('Background', module)
  .add('Default', () => <Background />)
  .add('With color', () => <Background color='red' />)