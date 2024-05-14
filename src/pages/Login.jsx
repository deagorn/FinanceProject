import { toast } from "react-toastify"
import AuthForm from "../components/AuthForm"
import { useDispatch } from "react-redux"
import { loginThunk } from "../redux/auth/operations";
import * as yup from 'yup'

const Login = () => {


    const dispatch = useDispatch();
    const validationScrema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
    })

    const handleSubmit = (values) => {
        dispatch(loginThunk(values)).unwrap()
            .then(data => {toast.info(`Welcome ${data.user.name}!`)})
            .catch(error => toast.error(error))
    }

    const initialValues = {
        email: '',
        password: '',
        name: ''
    }

  return (
      <div>
          <AuthForm title='Login' onSubmit={handleSubmit} initialValues={initialValues} validationScrema={validationScrema} />
    </div>
  )
}

export default Login