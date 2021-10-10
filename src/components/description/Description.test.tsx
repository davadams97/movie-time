import * as React from 'react';
import { Description } from './Description';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(() => cleanup());

test('renders the content correctly', () => {
    const { totalRating, buttonText, movieDescription } = {
        totalRating: 10,
        buttonText: 'Test',
        movieDescription: null,
    };
    render(<Description totalRating={totalRating} buttonText={buttonText} movieDescription={movieDescription} />);
    const element = screen.getByTestId('desc');
    expect(element).toBeInTheDocument();
});

test('should show rating correctly', () => {
    const { totalRating, buttonText, movieDescription } = {
        totalRating: 10,
        buttonText: 'Test',
        movieDescription: { vote_average: 4.6 },
    };
    render(<Description totalRating={totalRating} buttonText={buttonText} movieDescription={movieDescription} />);
    const element = screen.getByTestId('rating');
    expect(element).toHaveTextContent('4.6/10');
});

test('should show button text correctly', () => {
    const { totalRating, buttonText, movieDescription } = {
        totalRating: 7.5,
        buttonText: 'Click here!',
        movieDescription: null,
    };
    render(<Description totalRating={totalRating} buttonText={buttonText} movieDescription={movieDescription} />);
    const element = screen.getByTestId('button');
    expect(element).toHaveTextContent('Click here!');
});

test('should show release date correctly', () => {
    const { totalRating, buttonText, movieDescription } = {
        totalRating: 7.5,
        buttonText: 'Click here!',
        movieDescription: { release_date: '2021-10-01' },
    };
    render(<Description totalRating={totalRating} buttonText={buttonText} movieDescription={movieDescription} />);
    const element = screen.getByTestId('date');
    expect(element).toHaveTextContent('2021');
});

test('matches snapshot', () => {
    const { totalRating, buttonText, movieDescription } = {
        totalRating: 7.5,
        buttonText: 'Click here!',
        movieDescription: { release_date: '2021-10-01', vote_average: 7.2, runtime: 233 },
    };
    const tree = renderer
        .create(<Description totalRating={totalRating} buttonText={buttonText} movieDescription={movieDescription} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
