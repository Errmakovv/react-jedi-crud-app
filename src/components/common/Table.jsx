import React from 'react';
import Button from './Button';
import { Link } from "react-router-dom";

function Table({columns, data, tableDescriptor, onDeleteData, pathname}) {
    
    const handleClick = (id) => {
        onDeleteData(id);
    }

    return (
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">{tableDescriptor}</th>
                {columns.map(columnTitle => (
                    <th key={columnTitle} scope="col">{columnTitle}</th>
                ))}
            </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <th scope="row">{++index}</th>
                        {columns.map(columnTitle => (
                            columnTitle === 'name'?
                            <td key={item[columnTitle]+columnTitle}>
                                <Link className="text-warning" to={`${pathname}/${item.id}`}>
                                    {item[columnTitle]}
                                </Link>
                            </td>
                            : <td key={item[columnTitle]+columnTitle}>{item[columnTitle]}</td>
                        ))}
                        <td>
                            <Button
                            label="Delete"
                            classes="btn btn-danger"
                            onClick={() => handleClick(item.id)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;
