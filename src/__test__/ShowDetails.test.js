import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import ShowDetails from '../components/ShowDetails';
import '@testing-library/jest-dom/extend-expect';

describe('ShowDetails', () => {
  it('renders the component with tvmaze show details', () => {
    const showDetails = {
      id: 1,
      name: 'Test Show',
      time: '22:00',
      rating: 6.5,
      day: 'Thursday',
      language: 'English',
      genres: ['Genre 1', 'Genre 2'],
    };

    const initialState = {
      show: {
        shows: [showDetails],
        isLoading: false,
        error: null,
      },
    };

    const mockStore = configureMockStore([]);
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/show/1']}>
          <Routes>
            <Route path="/show/:id" element={<ShowDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Test Show')).toBeInTheDocument();
    expect(screen.getByText('22:00')).toBeInTheDocument();
    expect(screen.getByText('6.5')).toBeInTheDocument();
    expect(screen.getByText('Thursday')).toBeInTheDocument();
  });
});
