import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ReduxForm = (props) => {
  const { handleSubmit } = props;

  return (
    <>
      <h1>Redux Form</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='title'>title</label>
        <Field component='input' name='title' className='form-input' />

        <label htmlFor='content'>content</label>
        <Field component='textarea' name='content' as='textarea' className='form-input' />

        <label htmlFor='author'>author</label>
        <Field component='input' name='author' type='email' className='form-input' />

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'example form',
})(ReduxForm);
