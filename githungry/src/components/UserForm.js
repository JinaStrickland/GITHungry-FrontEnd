import React from 'react'
import { useFormik } from 'formik'

function UserForm() {

  const formik = useFormik({
    initialValues: {
      username: "", 
      password: ""
    },
    onSubmit: values => {
      console.log('Form values', values)
    },
    validate: values => {
      let errors = {}

      if(!values.username) {
        errors.username = "Required"
      }

      if(!values.password){
        errors.password = "Required"
      }

      return errors
    }
  })
  console.log('Visited fields', formik.touched)
    
    return(
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className='form-control'>
          <label>Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // has a field been visited or not
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
          <div className='error'>{formik.errors.username}</div>)
           : null}
          </div>
          <br/>
          <div className='form-control'>
          <label>Password: </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
          <div className='error'>{formik.errors.password}</div>)
           : null}
          </div>
          <br/>
          <button>Submit</button>
        </form>

      </div>
    )
}

export default UserForm