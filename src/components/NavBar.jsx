import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { selectIsLoggedIn, selectUser } from '../redux/auth/slice';
import { logoutThunk } from '../redux/auth/operations';

const NavBar = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch()

    return (
        <div className='header'>
            <Link to='/' className='link'>React Auth</Link>
            <h2>{user.email}</h2>
            <ul>
                <li>
                    <NavLink to='/' className='link'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts' className='link'>Contacts</NavLink>
                </li>
                
                {!isLoggedIn && <>
                    <li>
                        <NavLink to='/register' className='link'>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' className='link'>Login</NavLink>
                    </li>
                </>}
                {isLoggedIn &&
                    <li>
                        <NavLink onClick={() => dispatch(logoutThunk())} className='link'>Logout</NavLink>
                    </li>}
            </ul>
        </div>
    )
}

export default NavBar