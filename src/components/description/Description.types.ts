import { RootObject } from '../../pages/movie-information/MovieInformation.types';

export interface IDescriptionProps {
    totalRating: number;
    buttonText: string;
    movieDescription: Partial<RootObject> | null;
}
