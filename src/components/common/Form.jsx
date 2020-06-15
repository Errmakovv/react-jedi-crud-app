import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({columns, initialData, onAddData}) => {
    const [personData, setPersonData] = useState(initialData);
    const [errorFields, setErrorFields] = useState([]);
    const errorMessage = 'Field should not be empty';

    const handleClick = (event) => {
        event.preventDefault();
        const invalid = (columnName) => personData[columnName].length === 0;
        const errorFields = columns.filter(invalid);
        if(errorFields.length) {
            setErrorFields(errorFields);
        } else {
            onAddData(personData);
            setPersonData(initialData);
            setErrorFields([]);
        }
    }

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const data = {...personData};
        data[input.name] = input.value;
        setPersonData(data)
    }


    return (
        <form>
            {columns.map( columnName => (
                <Input
                key={columnName}
                name={columnName}
                label={columnName}
                error={errorFields.includes(columnName) ? errorMessage : ''}
                value={personData[columnName]}
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
