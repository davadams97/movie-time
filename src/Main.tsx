import './Main.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { MovieList } from './pages/movie-list/MovieList';
import { MovieInformation } from './pages/movie-information/MovieInformation';
import { FaArrowLeft } from 'react-icons/fa';

export class Main extends Component {
    render(): React.ReactElement {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/movie-list">
                                    <FaArrowLeft />
                                </Link>
                            </li>
                            <li>
                                <Link to="/movie-information">
                                    Movie Information
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Switch>
                        <Route path="/movie-list">
                            <MovieList />
                        </Route>
                        <Route path="/movie-information">
                            <MovieInformation />
                        </Route>
                        <Route path="/">
                            <MovieList />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
