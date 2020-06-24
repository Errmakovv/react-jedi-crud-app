import React from 'react';
import { Link } from "react-router-dom";

export const getTableColumns = (data, path, handleBelovedStatus) => {
  if (!data.length) return [];

  return Object.keys(data[0]).map(colName => {
      if (colName === 'beloved') {
          return {
              colName,
              content: ({beloved, id}) => (
                  <input
                      type="checkbox"
                      checked={beloved}
                      onChange={() => handleBelovedStatus(id)}
                  />
              )
          }
      }
      if (colName === 'name') {
          return {
              colName,
              content: ({name, id}) => (
                  <Link className="text-warning" to={`/${path}/${id}`}>{name}</Link>
              )
          }
      }
      return {colName}
  })
}