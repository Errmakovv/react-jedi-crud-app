import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

const Form = ({columns, initialData, onAddData, rootPath, schema}) => {
    const [itemData, setItemData] = useState(initialData);
    const [error, setError] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        setItemData(initialData);
    }, [initialData])

    const handleClick = (event) => {
        event.preventDefault();
        let { error } = schema.validate(itemData);
        if(error) {
            setError(error);
        } else {
            onAddData(itemData);
            setItemData(initialData);
            setError('');
            history.push(rootPath);
        }
    }

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const data = {...itemData};
        data[input.name] = input.value;
        setItemData(data)
    }


    return (
        <form>
            {columns.map( columnName => (
                <Input
                key={columnName}
                name={columnName}
                label={columnName}
                value={itemData[columnName]}
                type="input"
                onChange={handleChange}
                />
            ))}
            {error && <div className="alert alert-danger">{error.toString()}</div>}
            <Button
                label="Save"
                classes="btn btn-danger"
                onClick={handleClick}
            />
        </form>
    );
};

export default Form