import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import Container from '../src/Container/Container.jsx';

const isAnimated = true

storiesOf('Back Face', module)
  .add('Default', () => <Container title=" " text=" " url=" " />)
  .add('With title', () => <Container title="Title example" text=" " url=" " />)
  .add('With text and url', () => <Container
    title="Click me"
    text="Go to google.com"
    url="https://www.google.com"
  />)
  .add('With action', () => <Container
    title="Click me"
    text="This is a sample text!"
    onClick={action("You pressed the title!")}
  />)
  .add('Animated', () => <Container
    title="Hello world"
    text="I will scroll down when hovered!"
    url="https://www.google.com"
    animated
  />)