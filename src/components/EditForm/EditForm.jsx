import s from "../ContactForm/ContactForm.module.css"

import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { editContactThunk } from "../../redux/contacts/operations"


export const EditForm = ({content, toggle}) => {

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: content.name,
            number:content.number,
        }
    })
  const dispatch = useDispatch()
  
	const submit = data => {
        dispatch(editContactThunk({ ...content, ...data }))
        toggle()
		reset()
  }

  return (
    <form className={s.formContainer} onSubmit={handleSubmit(submit)}>
      <label className={s.label}>   Name
        <input {...register('name')} type="text" name="name" required className={s.inputField} /> </label>
      <label className={s.label}>  number
        <input {...register('number')} type="tel" name="number"  required className={s.inputField} />
      </label>

      <button className={s.submitButton}>Edit contact</button>
    </form>
  )
}
