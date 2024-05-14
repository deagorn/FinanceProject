import { useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

// const modalRoot = document.querySelector('#modal')
const modalRoot = document.body;

const Modal = ({ children, closeModal }) => {

    

	const handleKeyDown = useCallback(
		e => {
			if (e.key === 'Escape') {
				closeModal()
			}
		},
		[closeModal]
	)

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [closeModal, handleKeyDown])

	const handleBackdropClick = e => {
		if (e.target === e.currentTarget) {
			closeModal()
		}
	}
	return ReactDOM.createPortal(
		<ModalWrapper onClick={handleBackdropClick}>
			<ModalContent>
				<>
					<h1>Modal</h1>
					<hr />
				</>
				<CloseButton onClick={closeModal}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>,
		modalRoot
	)
}

export default Modal