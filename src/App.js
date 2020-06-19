import React, { useState, useEffect }  from 'react';
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
import FormPage from './components/pages/FormPage';

import { getPeople, getPlanets, getStarships } from './services/swApiService';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);
    console.log('rerender')

    useEffect(() => {
        const getData = async () => {
            console.log('effect')
            const peopleData = await getPeople()
            setPeople(peopleData)
        }

        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            console.log('effect')
            const planetsData = await getPlanets()
            setPlanets(planetsData)
        }

        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            console.log('effect')
            const starshipsData = await getStarships()
            setStarships(starshipsData)
        }

        getData()
    }, [])

    useEffect( () => {
        console.log('people effect', people.length)
        localStorage.setItem('people', JSON.stringify(people))
    }, [people])

    useEffect( () => {
        console.log('planets effect', planets.length)
        localStorage.setItem('planets', JSON.stringify(planets))
    }, [planets])

    useEffect( () => {
        console.log('starships effect', starships.length)
        localStorage.setItem('starships', JSON.stringify(starships))
    }, [starships])

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/people/:id" render={(props) => <FormPage {...props} setData={setPeople} data={people} rootPath='/people' />} />
                <Route path="/people" render={(props) => <PeoplePage {...props} setPeople={setPeople} people={people} />} />

                <Route path="/planets/:id" render={(props) => <FormPage {...props} setData={setPlanets} data={planets} rootPath='/planets' />} />
                <Route path="/planets" render={(props) => <PlanetsPage {...props} setPlanets={setPlanets} planets={planets} />} />

                <Route path="/starships/:id" render={(props) => <FormPage {...props} setData={setStarships} data={starships} rootPath='/starships' />} />
                <Route path="/starships" render={(props) => <StarshipsPage {...props} setStarships={setStarships} starships={starships} />} />

                <Redirect exact from="/" to="/people" />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    )
}

export default App
