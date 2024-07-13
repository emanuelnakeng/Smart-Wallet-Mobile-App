import { Modal, Pressable } from 'react-native';

const ModalContainer = ({ isVisible, children, onClose }) => {
	return (
		<Modal
			transparent
			visible={isVisible}
			animationType='slide'
			onRequestClose={onClose}
		>
			<Pressable
				style={{
					backgroundColor: 'rgba(0,0,0,0.95)',
					flex: 1,
					justifyContent: 'flex-end',
				}}
				onPress={onClose}
			>
				{children}
			</Pressable>
		</Modal>
	);
};
export default ModalContainer;
