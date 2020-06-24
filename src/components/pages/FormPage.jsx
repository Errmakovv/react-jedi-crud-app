import React from 'react'
import Form from '../common/Form';
import { useDispatch, useSelector } from 'react-redux';

function FormPage({ match, rootPath, schema, columns, addAction, updateAction, selector }) {
  const dispatch = useDispatch();
  const data = useSelector(state => selector(state));
  const { id } = match.params;
  const isNew = id === 'new';
 
  const handleAddData = (itemData) => {
    dispatch(addAction(itemData));
  }

  const handleUpdateData = (itemData) => {
    dispatch(updateAction(itemData));
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
