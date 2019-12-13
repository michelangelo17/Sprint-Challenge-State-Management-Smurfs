import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { addSmurf } from '../../redux/actions'

const CreateSmurfForm = () => {
  const dispatch = useDispatch()
  const { isSubmitting } = useSelector(state => state)
  return (
    <>
      <h2>Create a New Smurf</h2>
      <Formik
        initialValues={{
          name: '',
          age: '',
          height: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(addSmurf({
            ...values,
            height: `${values.height}cm`
          }))
            resetForm()
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(4, 'Must have at least 4 characters')
            .matches(/y$/, 'Name must end in y')
            .required(`Name can't be empty`),
          age: Yup.number()
            .min(0)
            .required(`Age can't be empty`),
          height: Yup.number()
            .min(1)
            .required(`Height can't be empty`),
        })}
      >
        <Form>
          <Field type='string' name='name' />
          <ErrorMessage name='name' component='p' />
          <Field type='number' name='age' />
          <ErrorMessage name='age' component='p' />
          <Field type='number' name='height' />
          <ErrorMessage name='height' component='p' />
          <button type='submit' disabled={isSubmitting} >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default CreateSmurfForm
