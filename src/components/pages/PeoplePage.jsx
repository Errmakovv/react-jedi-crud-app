import React, { useState } from 'react';
import Table from "../common/Table";
import Form from '../common/Form'
import Headline from '../common/Headline';

const data = [
    {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
    {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
    {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const columns = Object.keys(data[0]);

function PeoplePage() {
    const [people, setPeople] = useState(data);

    const handleAddPerson = (personData) => {
        const data = [...people, personData];
        setPeople(data)
    }

    const handleDeletePerson = (id) => {
        const data = people.filter((person) => id !== person.id);
        setPeople(data)
    }

    const getInitialPeopleData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            <Headline
                 headline = 'People from Star Wars Universe'
                 classes = 'h2'
            />
            { people.length ? 
                <Table
                data={people}
                columns={columns}
                onDeleteData={handleDeletePerson}
                tableDescriptor="People"
                /> 
                : 
                <Headline
                headline = 'No data'
                classes = 'h3 text-center'
                />
            }
            <Form
                initialData={getInitialPeopleData()}
                columns={columns}
                onAddData={handleAddPerson}
            />
        </div>
    );
}

export default PeoplePage;