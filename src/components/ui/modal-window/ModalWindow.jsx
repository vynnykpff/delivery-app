import {CloseButton, ModalContent, ModalOverlay} from "./ModalWindow.styled.jsx";
import {useState} from "react";

const ModalWindow = ({isOpen, onClose, children}) => {
	const [modalOpen, setModalOpen] = useState(isOpen);

	const closeModal = () => {
		setModalOpen(false);
		onClose();
	};

	if (!modalOpen) {
		return null;
	}
	return (
		<ModalOverlay>
			<ModalContent>
				<CloseButton onClick={closeModal}>&times;</CloseButton>
				{children}
			</ModalContent>
		</ModalOverlay>
	);
};

export default ModalWindow;
