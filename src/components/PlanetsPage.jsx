import React, { useState } from 'react';
import Table from "./common/Table";
import Form from './common/Form';
import Headline from './common/Headline';

const data = [
    {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
    {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
    {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const columns = Object.keys(data[0]);

function PlanetsPage() {
    const [planets, setPlanets] = useState(data);

    const handleAddPlanet = (planetData) => {
        const data = [...planets, planetData];
        setPlanets(data)
    }

    const handleDeletePlanet = (id) => {
        const data = planets.filter((planet) => id !== planet.id);
        setPlanets(data)
    }

    const getInitialPlanetsData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            <Headline
                 headline = 'Planets from Star Wars Universe'
                 classes = 'h2'
            />
            { planets.length ? 
                <Table
                data={planets}
                columns={columns}
                onDeleteData={handleDeletePlanet}
                tableDescriptor="Planets"
                />
                : 
                <Headline
                headline = 'No data'
                classes = 'h3 text-center'
                />
            }
            <Form
                initialData={getInitialPlanetsData()}
                columns={columns}
                onAddData={handleAddPlanet}
            />
        </div>
    );
}

export default PlanetsPage;