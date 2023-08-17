import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ShowsContainer from '../components/ShowsContainer';
import store from '../redux/store';
import '@testing-library/jest-dom';

describe('ShowsContainer component test', () => {
  const Bitten = {
    name: 'Bitten',
    rating: 7.5,
    id: 3,
  };

  it('Check if the component changed', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <ShowsContainer
              key={Bitten.id}
              id={Bitten.id}
              name={Bitten.name}
            />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
