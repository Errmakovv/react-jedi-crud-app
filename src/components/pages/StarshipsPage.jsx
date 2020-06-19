import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import Table from "../common/Table";
import Headline from '../common/Headline';
import Button from '../common/Button';

function StarshipsPage({ starships, setStarships }) {
    const columns = starships.length ? Object.keys(starships[0]) : [];
    const { path } = useRouteMatch();

    const handleDeleteStarship = (id) => {
        const data = starships.filter((starship) => id !== starship.id);
        setStarships(data)
    }

    return (
        <div className="container">
            <Headline
                 headline = 'Starships from Star Wars Universe'
                 classes = 'h2'
            />
            <Link to='/starships/new'>
                <Button
                    label="New Starship"
                    classes="btn btn-success m-2"
                />
            </Link>
            { starships.length ? 
                <Table
                data={starships}
                columns={columns}
                onDeleteData={handleDeleteStarship}
                tableDescriptor="Starships"
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

export default StarshipsPage;