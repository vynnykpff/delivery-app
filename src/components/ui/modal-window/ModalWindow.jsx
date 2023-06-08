import {ModalContent, ModalOverlay} from "./ModalWindow.styled.jsx";

const ModalWindow = ({ active, setActive, children }) => {
	return (
		<ModalOverlay
			className={
				active ? 'modal active' : 'modal'
			}
			onClick={() => setActive(false)}
		>
			<ModalContent
				className={
					active
						? `modal__content active`
						: `modal__content`
				}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</ModalContent>
		</ModalOverlay>
	);
};

export default ModalWindow;
