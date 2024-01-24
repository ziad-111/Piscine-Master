import { Modal, Portal, Text } from 'react-native-paper';
export const ModalComp = ({visible, hideModal})=>{
    const containerStyle = {backgroundColor: 'white', padding: 20};
    return (
        <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    );
}