import React, { Component } from 'react';
import { RootObject } from './MovieInformation.types';
import './MovieInformation.css';
import { BsPlayCircle } from 'react-icons/all';

export class MovieInformation extends Component<number, { id: number; res: RootObject | null }> {
    constructor(props: any) {
        super(props);
        this.state = { id: this.props, res: null };
    }

    componentDidMount(): void {
        const movieId: number = 550988;
        fetch(
            `http://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
        )
            .then((res: Response) => res.json())
            .then((res: RootObject) => {
                this.setState({ res: res });
                console.log(res);
            });
    }

    render(): React.ReactElement {
        const totalRating: number = 10;
        const buttonText: string = 'Add to Favorite';

        return (
            <div className="page">
                <div className="title">
                    <h2>{this.state.res?.original_title}</h2>
                </div>

                <div className="description-container">
                    {/*TODO: This is depending on state this not available yet*/}
                    <img
                        src={`https://image.tmdb.org/t/p/w185/${this.state.res?.poster_path}`}
                        alt={`${this.state.res?.original_title}`}
                    />

                    <div className="description">
                        <div>
                            <h3>{this.state.res?.release_date}</h3>
                        </div>
                        <div>
                            <em>{this.state.res?.runtime} mins</em>
                        </div>
                        <div>
                            <span>
                                <strong>
                                    {this.state.res?.vote_average}/{totalRating}
                                </strong>
                            </span>
                        </div>
                        <button>{buttonText}</button>
                    </div>
                </div>

                <div>
                    <p>{this.state.res?.overview}</p>
                </div>

                <h3>TRAILERS</h3>

                <hr />

                <div className="trailer-container">
                    <BsPlayCircle className="icon"/>
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
