import s from "./ContactList.module.css"
import { useDispatch } from 'react-redux'
import { MdDeleteOutline } from "react-icons/md";
import { removeContactThunk } from '../../redux/contacts/operations';


export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch()
    return (
        <li key={id} className={s.listItem}>  <div className={s.contactInfo}>
            <span className={s.contactName}> {name} </span> : {number} </div>

            {/* <button onClick={handleEditItem} type="button" className={s.deleteButton}>
                <MdOutlineEdit size={18} />
            </button> */}

             <button onClick={() => dispatch(removeContactThunk(id))} type="button" className={s.deleteButton}>
                <MdDeleteOutline size={18} />
            </button>
        </li>
    )
}
