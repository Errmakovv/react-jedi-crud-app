import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import PeoplePage from './components/pages/PeoplePage';
import PlanetsPage from './components/pages/PlanetsPage';
import StarshipsPage from './components/pages/StarshipsPage';
import NotFoundPage from './components/pages/NotFoundPage';
import Navbar from './components/navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <Router>
            <Navbar />
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
