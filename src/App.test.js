import { render, screen,fireEvent } from '@testing-library/react';
import BookingForm from "../src/components/BookingForm";

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByLabelText(/Choose date/);
  expect(headingElement).toBeInTheDocument();
});