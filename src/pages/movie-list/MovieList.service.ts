import { RootResult } from './MovieList.types';
import { handle } from '../../utility/handleRequest';

/**
 * Utility function load movie list
 */
export async function loadMovieList(): Promise<RootResult> {
    // TODO: Implementation of error handling can be improved. For now log to console.

    const [movieList, err] = await handle(
        fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
    );
    if (err) console.error(err);

    const [finalResponse, movieListError] = await handle(movieList.json());
    if (movieListError) console.error(err);

    return finalResponse;
}
