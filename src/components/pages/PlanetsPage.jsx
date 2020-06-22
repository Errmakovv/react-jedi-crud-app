import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import Table from "../common/Table";
import Headline from '../common/Headline';
import Button from '../common/Button';

function PlanetsPage({ planets, setPlanets }) {
    const columns = planets.length ? Object.keys(planets[0]) : [];
    const { path } = useRouteMatch();

    const handleDeletePlanet = (id) => {
        const data = planets.filter((planet) => id !== planet.id);
        setPlanets(data)
    }

    return (
        <div className="container">
            <Headline
                 headline = 'Planets from Star Wars Universe'
                 classes = 'h2'
            />
            <Link to='/planets/new'>
                <Button
                    label="Create Planet"
                    classes="btn btn-success m-2"
                />
            </Link>
            { planets.length ? 
                <Table
                data={planets}
                columns={columns}
                onDeleteData={handleDeletePlanet}
                tableDescriptor="Planets"
                pathname={path}
                />
                : 
                <Headline
                headline = 'No data'
                classes = 'h3 text-center'
                />
            }
        </div>
    );
}

export default PlanetsPage;