import React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';
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

import { getPeople, personSchema, personColumns } from './services/peopleService';
import { getPlanets, planetSchema, planetColumns } from './services/planetsService';
import { getStarships, starshipSchema, starshipColumns } from './services/starshipsService';

import { setPeople, addPerson, updatePerson } from './store/actions/people';
import { setStarships, addStarship, updateStarship } from './store/actions/starships';
import { setPlanets, addPlanet, updatePlanet } from './store/actions/planets';

import { getAllPeople } from './store/selectors/people';
import { getAllPlanets } from './store/selectors/planets';
import { getAllStarships } from './store/selectors/starships';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            const peopleData = await getPeople()
            dispatch(setPeople(peopleData));
        }

        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const getData = async () => {
            const planetsData = await getPlanets()
            dispatch(setPlanets(planetsData));
        }

        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const getData = async () => {
            const starshipsData = await getStarships()
            dispatch(setStarships(starshipsData));
        }

        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/people/:id" render={(props) => 
                    <FormPage 
                    {...props}
                    addAction={addPerson} 
                    updateAction={updatePerson} 
                    selector={getAllPeople}
                    schema={personSchema} 
                    columns={personColumns}
                    rootPath='/people' 
                    />
                } />
                <Route path="/people" render={(props) => <PeoplePage {...props} />} />

                <Route path="/planets/:id" render={(props) => 
                    <FormPage
                    {...props}  
                    addAction={addPlanet} 
                    updateAction={updatePlanet} 
                    selector={getAllPlanets}
                    schema={planetSchema}
                    columns={planetColumns}  
                    rootPath='/planets' 
                    />
                } />
                <Route path="/planets" render={(props) => <PlanetsPage {...props} />} />

                <Route path="/starships/:id" render={(props) => 
                    <FormPage 
                    {...props}
                    addAction={addStarship} 
                    updateAction={updateStarship} 
                    selector={getAllStarships}
                    schema={starshipSchema}
                    columns={starshipColumns} 
                    rootPath='/starships' 
                    />
                } />
                <Route path="/starships" render={(props) => <StarshipsPage {...props} />} />

                <Redirect exact from="/" to="/people" />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    )
}

export default App
