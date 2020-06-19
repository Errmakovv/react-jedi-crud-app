import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import Table from "../common/Table";
import Headline from '../common/Headline';
import Button from '../common/Button';

function PeoplePage({ people, setPeople }) {
    const columns = people.length ? Object.keys(people[0]) : [];
    const { path } = useRouteMatch();

    const handleDeletePerson = (id) => {
        const data = people.filter((person) => id !== person.id);
        setPeople(data)
    }

    return (
        <div className="container">
            <Headline
                headline = 'People from Star Wars Universe'
                classes = 'h2'
            />
            <Link to='/people/new'>
                <Button
                    label="New Person"
                    classes="btn btn-success m-2"
                />
            </Link>
            { people.length ? 
                <Table
                data={people}
                columns={columns}
                onDeleteData={handleDeletePerson}
                tableDescriptor="People"
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

export default PeoplePage;