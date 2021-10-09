import React, { Component } from 'react';
import { IState, Result, RootResult } from './MovieList.types';
import './MovieList.css';
import { handle } from '../../utility/handleError';

export class MovieList extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [],
        };
    }

    /**
     * Function creates "img" elements needed to display movies
     */
    createImageElements() {
        const { items: images } = this.state;
        return images.map((image: Result) => (
            <a key={image.id} href={`/movie-information/${image.id}`}>
                <img src={`https://image.tmdb.org/t/p/w154/${image.poster_path}`} alt={`${image.title}`} />
            </a>
        ));
    }

    /**
     * Utility function load movie list
     */
    async loadMovieList(): Promise<RootResult> {
        // TODO: Implementation of error handling can be improved. For now log to console.

        const [movieList, err] = await handle(
            fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        );
        if (err) console.error(err);

        const [finalResponse, movieListError] = await handle(movieList.json());
        if (movieListError) console.error(err);

        return finalResponse;
    }

    async componentDidMount(): Promise<void> {
        const finalResponse = await this.loadMovieList();
        this.setState({ items: finalResponse.results });
        this.props.callback('Popular Movies');
    }

    render(): React.ReactElement {
        return <div className="grid">{this.createImageElements()}</div>;
    }
}
