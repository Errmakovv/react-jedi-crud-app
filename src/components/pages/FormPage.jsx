import React from 'react'
import { nanoid } from 'nanoid';
import { idSize } from '../../services/utils';
import Form from '../common/Form';

function FormPage({ match, data, setData, rootPath, schema, columns }) {
  const { id } = match.params;
  const isNew = id === 'new';
  console.log('FormPage render')
  const handleAddData = (itemData) => {
    const newData = [...data, {...itemData, id: nanoid(idSize)}];
    setData(newData)
  }

  const handleUpdateData = (itemData) => {
    const newData = data.map((item) => 
      item.id === itemData.id ? itemData : item
    )
    setData(newData)
  }
  
  const getData = (id) => {
    return data.find((item) => item.id === id)
  }

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
        cols[columnName] = "";
        return cols;
    }, {})
  }

  return (
    <div className="container">
      <Form
      initialData={isNew ? getInitialData() : (getData(id) || getInitialData())}
      columns={columns}
      onAddData={isNew ? handleAddData : handleUpdateData}
      rootPath={rootPath}
      schema={schema}
      />
    </div>
  )
}

const areEqual = (prev, next) => prev.data.length === next.data.length

export default React.memo(FormPage, areEqual);
