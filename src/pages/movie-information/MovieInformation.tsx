import React, { Component } from 'react';
import { RootObject } from './MovieInformation.types';
import { BsPlayCircle } from 'react-icons/bs';
import './MovieInformation.css';
import { handle } from '../../utility/handleRequest';
import { Description } from '../../components/description/Description';

export class MovieInformation extends Component<any, { res: Partial<RootObject> | null }> {
    constructor(props: any) {
        super(props);
        this.state = { res: null };
    }

    /**
     * Utility function load movie details
     * @param id, movie ID
     */
    async loadMovie(id: number): Promise<RootObject> {
        // TODO: Implementation of error handling can be improved. For now log to console.

        const [movie, err] = await handle(
            fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        );
        if (err) console.error(err);

        const [movieJson, movieListError] = await handle(movie.json());
        if (movieListError) console.error(movieListError);

        return movieJson;
    }

    async componentDidMount(): Promise<void> {
        const { id } = this.props.match.params;
        const res = await this.loadMovie(id);

        this.setState({ res: res });
        this.props.callback('Movie Details');
    }

    render(): React.ReactElement {
        const totalRating: number = 10;
        const buttonText: string = 'Add to Favorite';
        const { res } = this.state;
        return (
            <div data-testid="page" className="page">
                <div className="title">
                    <h2>{res?.original_title}</h2>
                </div>

                <div className="description-container">
                    <img
                        src={res?.poster_path ? `https://image.tmdb.org/t/p/w185${res?.poster_path}` : ''}
                        alt={`${res?.original_title}`}
                    />

                    <Description totalRating={totalRating} buttonText={buttonText} movieDescription={res} />
                </div>

                <div>
                    <p>{res?.overview}</p>
                </div>

                <h3>TRAILERS</h3>

                <hr />

                <div className="trailer-container">
                    <BsPlayCircle className="icon" />
                    <span>Play trailer 1</span>
                </div>

                <div className="trailer-container">
                    <BsPlayCircle className="icon" />
                    <span>Play trailer 2</span>
                </div>
            </div>
        );
    }
}
