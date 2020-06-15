import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import PeoplePage from './components/PeoplePage';
import Header from './components/Header';
import PlanetsPage from './components/PlanetsPage';
import StarshipsPage from './components/StarshipsPage';
import NotFoundPage from './components/NotFoundPage';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <Router>
            <Header></Header>
            <Switch>
                <Redirect exact from="/" to="/people" />
                <Route path="/people" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    )
}

export default App
