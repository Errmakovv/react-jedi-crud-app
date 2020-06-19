import React from 'react'
import Form from '../common/Form';

function FormPage({ match, data, setData, rootPath }) {
  const columns = data.length ? Object.keys(data[0]) : [];
  const { id } = match.params;
  const isNew = id === 'new';

  const handleAddData = (itemData) => {
    const newData = [...data, itemData];
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
      initialData={isNew ? getInitialData() : getData(id)}
      columns={columns}
      onAddData={isNew ? handleAddData : handleUpdateData}
      rootPath={rootPath}
      />
    </div>
  )
}

export default FormPage
