import React from 'react';
import withLoader from '../hoc/withLoader';

const ListData = () => {
  return (
    <ul>
      <li>Dummy Data1</li>
      <li>Dummy Data2</li>
      <li>Dummy Data3</li>
      <li>Dummy Data4</li>
      <li>Dummy Data5</li>
      <li>Dummy Data6</li>
      <li>Dummy Data7</li>
      <li>Dummy Data8</li>
    </ul>
  )
}

export default withLoader(ListData)
