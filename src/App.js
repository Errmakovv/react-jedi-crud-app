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

import { getPeople, personSchema, personColumns } from './services/peopleService';
import { getPlanets, planetSchema, planetColumns } from './services/planetsService';
import { getStarships, starshipSchema, starshipColumns } from './services/starshipsService';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);
   
    useEffect(() => {
        const getData = async () => {
            const peopleData = await getPeople()
            setPeople(peopleData)
        }

        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            const planetsData = await getPlanets()
            setPlanets(planetsData)
        }

        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            const starshipsData = await getStarships()
            setStarships(starshipsData)
        }

        getData()
    }, [])

    useEffect( () => {
       localStorage.setItem('people', JSON.stringify(people))
    }, [people])

    useEffect( () => {
        localStorage.setItem('planets', JSON.stringify(planets))
    }, [planets])

    useEffect( () => {
        localStorage.setItem('starships', JSON.stringify(starships))
    }, [starships])

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/people/:id" render={(props) => 
                    <FormPage 
                    {...props} 
                    setData={setPeople} 
                    data={people} 
                    schema={personSchema} 
                    columns={personColumns}
                    rootPath='/people' 
                    />
                } />
                <Route path="/people" render={(props) => <PeoplePage {...props} setPeople={setPeople} people={people} />} />

                <Route path="/planets/:id" render={(props) => 
                    <FormPage
                    {...props} 
                    setData={setPlanets} 
                    data={planets} 
                    schema={planetSchema}
                    columns={planetColumns}  
                    rootPath='/planets' 
                    />
                } />
                <Route path="/planets" render={(props) => <PlanetsPage {...props} setPlanets={setPlanets} planets={planets} />} />

                <Route path="/starships/:id" render={(props) => 
                    <FormPage 
                    {...props} 
                    setData={setStarships} 
                    data={starships} 
                    schema={starshipSchema}
                    columns={starshipColumns} 
                    rootPath='/starships' 
                    />
                } />
                <Route path="/starships" render={(props) => <StarshipsPage {...props} setStarships={setStarships} starships={starships} />} />

                <Redirect exact from="/" to="/people" />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    )
}

export default App
