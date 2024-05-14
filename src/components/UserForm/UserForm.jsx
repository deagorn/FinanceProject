// import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';

export const UserForm = () => {

    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()
    const submit = (data) => {
        // console.log(data);
        dispatch(login(data.user))
        reset()
    }

  return (
      <div>
          <h2>Enter your username to loggin: </h2>
          <form onSubmit={handleSubmit(submit)}>
              <input {...register('user')} type="text" required />
              <button>Login</button>
          </form>
    </div>
  )
}
