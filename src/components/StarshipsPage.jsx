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

function StarshipsPage() {
    const [starships, setStarships] = useState(data);

    const handleAddStarship = (starshipData) => {
        const data = [...starships, starshipData];
        setStarships(data)
    }

    const handleDeleteStarship = (id) => {
        const data = starships.filter((starship) => id !== starship.id);
        setStarships(data)
    }

    const getInitialStarshipsData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            <Headline
                 headline = 'Starships from Star Wars Universe'
                 classes = 'h2'
            />
            { starships.length ? 
                <Table
                data={starships}
                columns={columns}
                onDeleteData={handleDeleteStarship}
                tableDescriptor="Starships"
                />
                : 
                <Headline
                headline = 'No data'
                classes = 'h3 text-center'
                />
            }
            <Form
                initialData={getInitialStarshipsData()}
                columns={columns}
                onAddData={handleAddStarship}
            />
        </div>
    );
}

export default StarshipsPage;