import React from 'react';
import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik';
import * as Yup from 'yup';

import Textarea from './reusable/Textarea';
import Input from './reusable/Input';

const validationSchema = Yup.object().shape({
  title: Yup
    .string()
    .min(5)
    .max(20)
    .required('is required'),
  content: Yup
    .string()
    .min(5)
    .max(20)
    .required('is required'),
  author: Yup
    .object()
    .shape({
      email: Yup
        .string()
        .email('is invalid')
        .required('is required'),
      address: Yup
        .string()
        .min(4)
        .required('is required'),
    })
})

const FormikForm = (props) => {
  const handleSubmit = (formikProps) => {
    console.log({formikProps})
  }

  const renderForm = (formikProps) => {
    const { values } = formikProps
    
    return (
      <Form className='form'>
        <label htmlFor='title'>title</label>
        <Field as={Input} name='title' />
        <ErrorMessage name='title'/>

        <label htmlFor='content'>content</label>
        <Field name='content' as={Textarea}/>
        <ErrorMessage name='content'/>

        <label htmlFor='author.email'>email</label>
        <Field as={Input} name='author.email' type='email'/>
        <ErrorMessage name='author.email'/>

        <label htmlFor='author.address'>address</label>
        <Field as={Input} name='author.address'/>
        <ErrorMessage name='author.address'/>

        <FieldArray
          name='favoriteSnacks'
          render={arrayHelpers => (
            <div>
              {values.favoriteSnacks && values.favoriteSnacks.length > 0 ? (
                <>
                  <label htmlFor='favoriteSnacks.0'> favorite snacks</label>
                  {values.favoriteSnacks.map((_snack, index) => (
                    <div key={index}>
                      <Field as={Input} name={`favoriteSnacks.${index}`}/>
                      <ErrorMessage name={`favoriteSnacks.${index}`}/>

                      <button type='button' onClick={() => arrayHelpers.remove(index)}>-</button>
                    </div>
                  ))}
                  <button type='button' onClick={() => arrayHelpers.push('')}>+</button>
                </>
              ) : (
                <button type='button' onClick={() => arrayHelpers.push('')}>
                  Add snack
                </button>
              )}
            </div>
          )}
        />

        <button type='submit'>Submit</button>
      </Form>
    )
  }

  console.log(props.history)
  return (
    <>
      <h1>Formik form</h1>
      <Formik
        initialValues={{
          title: '',
          content: '',
          author: {
            email: '',
            address: ''
          },
          favoriteSnacks: []
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => renderForm(formikProps)}
      </Formik>
    </>
  )
}

export default FormikForm
