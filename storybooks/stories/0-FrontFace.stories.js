import React from 'react';
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs'
import Background from '../src/Background/Background.jsx';

const isAnimated = true
const notAnimated = false

storiesOf('Front Face', module)
  .add('Default', () => <Background />)
  .add('With color', () => <Background bgColor='#52de97' />)
  .add('With icon', () => <Background bgColor='#52de97' />)
  .add('With hover animation', () => <Background bgColor='#52de97' animated={ isAnimated } />)
  .addDecorator(withKnobs)
  .add('Customize', () => <Background
    bgColor={color('Button color', '#fff')}
    animated={boolean('Animation on hover', false)}
  />)