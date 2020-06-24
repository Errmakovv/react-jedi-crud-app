import React from 'react';
import { Link } from "react-router-dom";
import Table from "../common/Table";
import Headline from '../common/Headline';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPeople } from '../../store/selectors/people';
import { deletePerson, changeBelovedStatus } from '../../store/actions/people';
import { getTableColumns } from './utils';

function PeoplePage() {
    const dispatch = useDispatch();
    const people = useSelector(state => getAllPeople(state));

    const handleBelovedStatus = id => {
        dispatch(changeBelovedStatus(id));
    }

    const handleDeletePerson = (id) => {
        dispatch(deletePerson(id));
    }

    return (
        <div className="container">
            <Headline
                headline = 'People from Star Wars Universe'
                classes = 'h2'
            />
            <Link to='/people/new'>
                <Button
                    label="Create Person"
                    classes="btn btn-success m-2"
                />
            </Link> 
            <Table
            data={people}
            columns={getTableColumns(people, 'people', handleBelovedStatus)}
            onDeleteData={handleDeletePerson}
            tableDescriptor="People"
            /> 
        </div>
    );
}

export default PeoplePage;