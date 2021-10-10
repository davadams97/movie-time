import React, { Component } from 'react';
import './Description.css';
import { IDescriptionProps } from './Description.types';

export class Description extends Component<IDescriptionProps, any> {
    render(): React.ReactElement {
        const { totalRating, buttonText, movieDescription } = this.props;

        return (
            <div data-testid="desc" className="description">
                <div>
                    <span data-testid="date" className="date">
                        {movieDescription?.release_date?.split('-')[0] ?? ''}
                    </span>
                </div>
                <div>
                    <em>{movieDescription?.runtime} mins.</em>
                </div>
                <div className="rating">
                    <span>
                        <strong data-testid="rating">
                            {movieDescription?.vote_average}/{totalRating}
                        </strong>
                    </span>
                </div>
                <button data-testid="button" id="btn">
                    {buttonText}
                </button>
            </div>
        );
    }
}
