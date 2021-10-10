import { RootObject } from './MovieInformation.types';
import { handle } from '../../utility/handleRequest';

/**
 * Utility function load movie details
 * @param id, movie ID
 */
export async function loadMovie(id: number): Promise<RootObject> {
    // TODO: Implementation of error handling can be improved. For now log to console.

    const [movie, err] = await handle(
        fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
    );
    if (err) console.error(err);

    const [movieJson, movieListError] = await handle(movie.json());
    if (movieListError) console.error(movieListError);

    return movieJson;
}
