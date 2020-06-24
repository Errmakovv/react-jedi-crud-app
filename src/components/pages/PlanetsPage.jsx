import React from 'react';
import { Link } from "react-router-dom";
import Table from "../common/Table";
import Headline from '../common/Headline';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlanets } from '../../store/selectors/planets';
import { deletePlanet, changeBelovedStatus } from '../../store/actions/planets';
import { getTableColumns } from './utils';

function PlanetsPage() {
    const dispatch = useDispatch();
    const planets = useSelector(state => getAllPlanets(state));

    const handleBelovedStatus = id => {
        dispatch(changeBelovedStatus(id));
    }

    const handleDeletePlanet = (id) => {
        dispatch(deletePlanet(id));
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
            <Table
            data={planets}
            columns={getTableColumns(planets, 'planets', handleBelovedStatus)}
            onDeleteData={handleDeletePlanet}
            tableDescriptor="Planets"
            />
        </div>
    );
}

export default PlanetsPage;