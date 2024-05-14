import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataThunk } from '../../redux/contacts/operations'
import { selectIsError, selectIsLoading } from '../../redux/contacts/slice'

import { ContactForm } from '../ContactForm/ContactForm'
import { ContactList } from '../ContactList/ContactList'



export const TodoList = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDataThunk())
	}, [dispatch]);

	const error = useSelector(selectIsError)
	const loading = useSelector(selectIsLoading)
	return (
		<section>
			{/* <UserForm /> */}
			{/* {user && <h2>Current user:  {user}</h2>} */}
			<ContactForm />
			{/* <Filter /> */}
			{loading && <h1>Loading...</h1>}
			{!error ? <ContactList /> : <h1>Ops!</h1>}
		</section>
	)
}