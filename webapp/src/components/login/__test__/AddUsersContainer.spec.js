import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import AddUsersContainer from '../AddUsersContainer';


describe('AddUsersContainer', () => {
 let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  // Prueba la primer renderización y componentDidMount
  act(() => {    ReactDOM.render(<AddUsersContainer webId="https://webid.example/#me" fullName="John Doe"/>, container);  });  
  expect(container).toBeTruthy();
});
});