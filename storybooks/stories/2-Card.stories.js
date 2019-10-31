import React from 'react';
import { storiesOf } from '@storybook/react'
import Card from '../src/Card/Card.jsx';
import '../src/index.css'

storiesOf('Card', module)
  .add('Github', () => <Card
    link="https://www.github.com/OJP98"
    icon='github'
    bgColor='#e07768'
    title='¡Mis proyectos y trabajos!'
    text='Click al título para ir a mi github :)'
  />)
  .add('Linked In', () => <Card
    link="https://www.google.com"
    icon='linkedin'
    bgColor='#4aada9'
    title='Aquí es donde iría mi CV... si tuviera uno'
    text='El título te lleva a google, estoy trabajando en mi Linked In :('
  />)
  .add('Twitter', () => <Card
    link="https://www.twitter.com"
    icon='twitter'
    bgColor='#6eadd4'
    title='Página de chismes y controversias'
    text='Sorry, cree twitter pero no lo uso. Me parece un poco aburrido :) El título te lleva a la home page de twitter'
  />)