import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(11, 'Name must be at most 11 characters')
    .required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must contain at least one letter and one number')
    .required('Password is required'),
});

const RegisterForm = () => {  
   return (<div>
        <h2>Registration</h2>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values)
                }}>
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor='name'>Name</label>
                        <Field id="name" name="name" placeholder="Name" />
                        {errors.name && touched.name ? (
                           <div>{errors.name}</div>
                        ) : null}
                        <label htmlFor='email'>Email</label>
                        <Field id="email" name="email" placeholder="Email" />
                        {errors.email && touched.email ? (
                           <div>{errors.email}</div>
                        ) : null}
                        <label htmlFor='password'>Name</label>
                        <Field id="password" name="password" placeholder="Password" />
                        {errors.password && touched.password ? (
                           <div>{errors.password}</div>
                        ) : null}
                    <button type='submit'>Submit</button>
                    </Form>
            )}
            

            </Formik>
        </div>)
}

export default RegisterForm