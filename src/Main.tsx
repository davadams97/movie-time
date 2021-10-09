import './Main.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { MovieList } from './pages/movie-list/MovieList';
import { MovieInformation } from './pages/movie-information/MovieInformation';
import { FaArrowLeft } from 'react-icons/fa';

export class Main extends Component<any, { pageName: string }> {
    constructor(props: any) {
        super(props);
        this.setPageName = this.setPageName.bind(this);
        this.state = { pageName: '' };
    }

    setPageName(name: string): void {
        this.setState({ pageName: name });
    }

    determineTitle(): React.ReactElement | null {
        const { pageName } = this.state;

        // Since we want to conditionally render the back button, we capture the location to determine the page
        if (window.location.pathname.split('/')[1] === 'movie-list') {
            return (
                <div className="navbar">
                    <span className="header-title">{pageName}</span>
                </div>
            );
        } else {
            return (
                <div className="navbar">
                    <Link to="/movie-list">
                        <FaArrowLeft className="navigation-icon" />
                    </Link>
                    <span className="header-title">{pageName}</span>
                </div>
            );
        }
    }

    render(): React.ReactElement {
        return (
            <div>
                <Router>
                    {this.determineTitle()}

                    <Switch>
                        <Route
                            path="/movie-list"
                            render={(props) => <MovieList {...props} callback={this.setPageName} />}
                        />
                        <Route
                            path="/movie-information/:id"
                            render={(props) => <MovieInformation {...props} callback={this.setPageName} />}
                        />
                        <Route path="/">
                            <Redirect to="/movie-list" />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
