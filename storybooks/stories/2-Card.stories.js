import React from 'react';
import { storiesOf } from '@storybook/react'
import Card from '../src/Card/Card.jsx';
import '../src/index.css'

storiesOf('Card', module)
  .add('Default', () => <Card link="https://www.github.com"/>)