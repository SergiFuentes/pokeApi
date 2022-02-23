import React from 'react';
import { render, screen, fireEvent, getByTestId} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ReactDOM from "react-dom";
import { unmountComponentAtNode } from "react-dom";
import App from './App';
import { CardsList } from './components/Cards/CardsList';

/* let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


test('renders previous button in App', () => {
  render( <App /> ); */
  /* act(() => {
    ReactDOM.render(<CardsList />, container);
  }); */
/*   const prevButton = screen.getAllByText(/PREVIOUS/i);
  expect(prevButton).toBeInTheDocument();
} );

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
} ); */

/* it("App loads with initial CardList containing a cardsList div", () => {
  const { container } = render( <App /> );
  act(() => {
    ReactDOM.render(<CardsList />, container);
  });
  const cardsList = getByTestId(container, "cardsList");
  expect(cardsList.getElementsByTagName).toBe("div");
}); */




