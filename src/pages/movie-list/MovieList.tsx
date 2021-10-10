import React, { Component } from "react";
import { IState, Result } from "./MovieList.types";
import "./MovieList.css";
import { loadMovieList } from "./MovieList.service";

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

    async componentDidMount(): Promise<void> {
        const finalResponse = await loadMovieList();
        this.setState({ items: finalResponse.results });
        this.props.callback('Popular Movies');
    }

    render(): React.ReactElement {
        return <div className="grid">{this.createImageElements()}</div>;
    }
}
