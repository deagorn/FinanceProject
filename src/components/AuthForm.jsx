import { Form, Formik } from "formik"
import styles from "./AuthForm.module.css";
import { Link } from "react-router-dom";
import CustomInputs from "./CustomInputs";

const AuthForm = ({title, onSubmit, initialValues, type, validationScrema}) => {
  return (
    <div className={styles.container}>
      <Formik validationSchema={validationScrema} onSubmit={onSubmit} initialValues={initialValues}>
        <Form className={styles.form}>
          {type === 'register' && <CustomInputs name='name' type='text' placeholder='Enter your name'/>}

          <CustomInputs name='email' type='text' placeholder='Enter your email' />
          <CustomInputs name='password' type='password' placeholder='Enter your password'/>


          <button className={styles.btn} type="submit">{title}</button>
          <p> You {type === 'register' ? 'already have an account?' : 'dont have an account?'}
            <Link to={type === 'register' ? '/login' : '/register'}>{type === 'register' ? '  Login' : '  Register'}</Link></p>
        </Form>
      </Formik>
    </div>
  )
}

export default AuthForm