import { useSelector } from "react-redux"
import s from "./ContactList.module.css"
import { selectFilterData } from '../../redux/contacts/selectors'
import { ContactItem } from './ContactItem'

export const ContactList = () => {
    const contacts = useSelector(selectFilterData);

    return (
        <div className={s.listFlex}>
            <ul className={s.listContainer}>
                {contacts.map(contact =>
                    <ContactItem key={contact.id} {...contact} />)}
            </ul></div>
        
    )
}

