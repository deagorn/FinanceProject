import { useDispatch, useSelector } from 'react-redux'
// import { changeFilter, changeValue } from '../../redux/Contacts/action'
// import { selectFilter, selectValue } from '../../redux/Contacts/selectors'
import clsx from 'clsx'
import s from "./Filter.module.css"
import { changeFilter, changeValue, selectFilter, selectValue } from '../../redux/contacts/slice'

const btns = ['all', 'favorites']
export const Filter = () => {
	const dispatch = useDispatch()
  const filter = useSelector(selectFilter)
  const value = useSelector(selectValue)

  const handleChangeValue = e => {
		dispatch(changeValue(e.target.value))
  }
  
	return (
		<div className={s.filterContainer}>
			{btns.map(btn => (
				<button className={clsx(filter === btn && s.active)} onClick={() => dispatch(changeFilter(btn))} key={btn} >
					{btn}
				</button>
      ))}

      <label className={s.filterLabel}>
     Find contacts by name
     <input type="text" name="filter" value={value} onChange={handleChangeValue} className={s.filterInput}/>
     </label>
		</div>
	)
}

// const Filter = ({ value, onChange }) => (
//   <div className={s.filterContainer}>   
//   <label className={s.filterLabel}>
//     Find contacts by name
//     <input type="text" name="filter" value={value} onChange={onChange} className={s.filterInput}/>
//     </label>
//     </div>
// )

export default Filter;