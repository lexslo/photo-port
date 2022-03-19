import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

afterEach(cleanup);

const currentPhoto = {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

const mockToggleModal = jest.fn();

describe('Modal component', () => {
    it('renders', () => {
      render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
    })
  
    it('matches snapshot DOM node structure', () => {
      const { asFragment } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
  
      expect(asFragment()).toMatchSnapshot();
    });
  })
  
describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
      // simulate the user click event
      fireEvent.click(getByText('Close'))
  
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})  