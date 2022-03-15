import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// ensure that after each test there is no leftover memory data that could give false results
afterEach(cleanup);

describe('About component', () => {
    // first test
    // verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });

    // second test
    it('matches snapshot DOM structure', () => {
        // render About
        // asFragment returns a snapshot of the About component
        const { asFragment } = render(<About />);
        // test and compare whether the expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    })
});
