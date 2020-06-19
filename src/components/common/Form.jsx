import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

const Form = ({columns, initialData, onAddData, rootPath}) => {
    const [itemData, setItemData] = useState(initialData);
    const [errorFields, setErrorFields] = useState([]);
    const history = useHistory();

    const errorMessage = 'Field should not be empty';

    const handleClick = (event) => {
        event.preventDefault();
        const invalid = (columnName) => itemData[columnName].length === 0;
        const errorFields = columns.filter(invalid);
        if(errorFields.length) {
            setErrorFields(errorFields);
        } else {
            onAddData(itemData);
            setItemData(initialData);
            setErrorFields([]);
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
                error={errorFields.includes(columnName) ? errorMessage : ''}
                value={itemData[columnName]}
                type="input"
                onChange={handleChange}
                />
            ))}
            <Button
                label="Save"
                classes="btn btn-danger"
                onClick={handleClick}
            />
        </form>
    );
};

export default Form;
