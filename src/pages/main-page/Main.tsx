import './Main.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import {MovieList} from "../movie-list/MovieList";
import {MovieInformation} from "../movie-information/MovieInformation";

export class Main extends Component<any, { pageName: string }> {
    constructor(props: any) {
        super(props);
        this.setPageName = this.setPageName.bind(this);
        this.state = { pageName: '' };
    }

    setPageName(name: string): void {
        this.setState({ pageName: name });
    }

    /**
     * Since we want to conditionally render the back button, we capture the location to determine the page
     */
    determineTitle(): React.ReactElement | null {
        if (window.location.pathname.split('/')[1] === 'movie-information') {
            return (
                <Link to="/movie-list">
                    <FaArrowLeft className="navigation-icon" />
                </Link>
            );
        }

        return null;
    }

    render(): React.ReactElement {
        const { pageName } = this.state;

        return (
            <div>
                <Router>
                    <div className="navbar">
                        {this.determineTitle()}
                        <span className="header-title">{pageName}</span>
                    </div>

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
