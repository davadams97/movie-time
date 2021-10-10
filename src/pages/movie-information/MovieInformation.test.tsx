import * as React from 'react';
import { cleanup } from '@testing-library/react';
import { MovieInformation } from './MovieInformation';
import { shallow } from 'enzyme';

const mockData = {
    adult: false,
    backdrop_path: '/iTgM25ftE7YtFgZwUZupVp8A61S.jpg',
    belongs_to_collection: null,
    budget: 18000000,
    genres: [
        { id: 27, name: 'Horror' },
        { id: 9648, name: 'Mystery' },
        { id: 53, name: 'Thriller' },
    ],
    homepage: 'https://www.old.movie/',
    id: 631843,
    imdb_id: 'tt10954652',
    original_language: 'en',
    original_title: 'Old',
    overview:
        'A group of families on a tropical holiday discover that the secluded beach where they are staying is somehow causing them to age rapidly – reducing their entire lives into a single day.',
    popularity: 1135.166,
    poster_path: '/vclShucpUmPhdAOmKgf3B3Z4POD.jpg',
    production_companies: [
        { id: 33, logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png', name: 'Universal Pictures', origin_country: 'US' },
        {
            id: 12236,
            logo_path: '/uV6QBPdn3MjQzAFdgEel6od7geg.png',
            name: 'Blinding Edge Pictures',
            origin_country: 'US',
        },
        {
            id: 10338,
            logo_path: '/el2ap6lvjcEDdbyJoB3oKiYgXu9.png',
            name: 'Perfect World Pictures',
            origin_country: 'CN',
        },
    ],
    production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
    release_date: '2021-07-21',
    revenue: 89500000,
    runtime: 108,
    spoken_languages: [{ english_name: 'English', iso_639_1: 'en', name: 'English' }],
    status: 'Released',
    tagline: "It's only a matter of time.",
    title: 'Old',
    video: false,
    vote_average: 6.7,
    vote_count: 1169,
};
// TODO: Need to figure out how to test routing in react

afterEach(() => cleanup());

test('renders correctly', () => {
    shallow(<MovieInformation />);
});

test('ensure that state is not null', () => {
    const wrapper = shallow(<MovieInformation />);
    const instance = wrapper.instance();
    instance.setState({ res: mockData });
    expect(instance.state).not.toBe(null);
});

// TODO: Need to test async call
