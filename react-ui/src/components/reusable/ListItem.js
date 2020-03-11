import React from 'react';
import Button from './Button';
import Row from './Row';

const ListItem = ({children, handleDelete, handleEdit}) => (
  <Row>
    <Button kind="close" type="button" onClick={handleDelete}>X</Button>
    <Button kind="edit" type="button" onClick={handleEdit}>Edit</Button>
    <div>{children}</div>
  </Row>
)

export default ListItem
