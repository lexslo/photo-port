import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

// describe function is not necessary for the test to run
// it is used to organize tests into sections that are labeled with the element being tested
describe('Nav component', () => {
    // baseline
    it('renders', () => {
        render(<Nav 
            categories={categories} 
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
    })
    // snapshot
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories} 
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('camera emoji is visible', () => {
    it('inserts emoji into h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav 
            categories={categories} 
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
        // Assert
        // test the emoji's accessibility features by querying the element by its aria-label camera
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav 
            categories={categories} 
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
})