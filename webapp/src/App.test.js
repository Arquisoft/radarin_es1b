import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';
import NavBar from './components/NavBar';
test('renders learn react link', () => {
  var result=render(<App />);
  expect(result).toBeTruthy();
   
});
describe('App', function () {
  it('should link to profile page of given WebID', () => {
    var result=shallow(<App />);
    const nav=result.find(NavBar);
    expect(nav).toBeTruthy();
  });

});