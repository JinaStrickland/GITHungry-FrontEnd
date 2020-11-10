import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'

const initialValues = {
  username: "",
  password: ""
}

const onSubmit = values => {
  console.log("Form Values", values)
}

const validate = values => {
  let errors = {}
  if(!values.username){
    errors.username = "Username is required!"
  }
  if(!values.password){
    errors.password = "Password is required!"
  }
  return errors
}
function UserSignUpForm () {

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validate={validate}>
      <Form className="ui form">
        <div className="form-control">
          <label>Username: </label>
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Username..."
          />
          <ErrorMessage name="username">
            {errorMsg => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <br/>
        <div className="form-control">
          <label>Password: </label>
          <Field
            type="text"
            id="password"
            name="password"
            placeholder="Password..."
            />
            <ErrorMessage>
              {errorMsg => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
        </div>
        <br/>
        <button>Submit</button>
      </Form>
    </Formik>
  )
}

export default UserSignUpForm