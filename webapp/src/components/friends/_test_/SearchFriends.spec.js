import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import SearchFriends from '../Friends';
import { Button } from '@material-ui/core';
import Friend from "../../friendList/friend";



let container;

const literal = value => ({
  toString: () => value
});

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a search', () => {
  // Prueba la primer renderización y componentDidMount
  act(() => {    ReactDOM.render(<SearchFriends webId={literal('https://uo225211.solidcommunity.net/')}/>, container);  }); 
  const button = container.querySelector('button');
  const label = container.querySelector('querySuccess');
  //expect(container.state).toBe('searchName: ""');
  expect(label).toBe(null);
  // Prueba la segunda renderización y componentDidUpdate
  act(() => {    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));  }); 
  expect(label).toBe(null);
  //expect(contador).toBe(true);
});