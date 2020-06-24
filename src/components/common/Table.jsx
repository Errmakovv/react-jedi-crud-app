import React from 'react';
import Button from './Button';
import { nanoid } from 'nanoid';

function Table({columns, data, tableDescriptor, onDeleteData}) {
    
    const handleClick = (id) => {
        onDeleteData(id);
    }

    const createKey = value => {
        return value + nanoid();
    }

    const renderCell = (item, column) => column.content ?
        column?.content(item) : item[column.colName];

    if (!data?.length) {
        return <h4>There are no data for {tableDescriptor}</h4>
    }

    return (
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">{tableDescriptor}</th>
                {columns.map(column => (
                    <th key={createKey(column.colName)} scope="col">{column.colName}</th>
                ))}
            </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={createKey(item.name)}>
                        <th scope="row">{++index}</th>
                        {columns.map(column => {
                            return (
                                <td key={createKey(item.name)}>
                                    {renderCell(item, column)}
                                </td>
                            )
                        })}
                        <td>
                            <Button
                                onClick={()=> handleClick(item.id)}
                                classes="btn btn-danger"
                                label="Delete"
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;
