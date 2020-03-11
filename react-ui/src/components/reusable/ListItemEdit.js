import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Row from './Row';

const EditRow = styled(Row)`
  border: solid red 2px;
`

const EditItem = ({children, handleUpdate, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title)
  const [duration, setDuration] = useState(initialValues.durationInMinutes)

  const handleSubmit = (event) => {
    event.preventDefault()
    handleUpdate({title, duration})
  }

  return (
    <EditRow>
      <Button disabled kind="close" type="button" >X</Button>
      <Button kind="apply" type="button" onClick={handleUpdate}>Ok</Button>
      <form>
        <label>
          Title:
        </label>
        <input
          value={title}
          type="text"
          onChange={(event => setTitle(event.target.value))}
        />

        <label>
          Duration:
        </label>
        <input
          value={duration}
          type="text"
          onChange={(event => setDuration(event.target.value))}
        />
      </form>
    </EditRow>
  )
}

export default EditItem
