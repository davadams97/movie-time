import React, { Component } from 'react';
import { IState, Result, RootResult } from './MovieList.types';
import './MovieList.css';

export class MovieList extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    /**
     * Function creates "img" elements needed to display movies
     */
    createImageElements() {
        const images = this.state.items;
        return images.map((image: Result) => (
            <a href="">
                <img
                    src={`https://image.tmdb.org/t/p/w185/${image.poster_path}`}
                    alt={`${image.title}`}
                />
            </a>
        ));
    }

    componentDidMount(): void {
        fetch(
            `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
        )
            .then((res: Response) => res.json())
            .then((res: RootResult) =>
                this.setState({ isLoaded: true, items: res.results })
            );
    }

    render(): React.ReactElement {
        return <div>{this.createImageElements()}</div>;
    }
}
