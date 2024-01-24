import * as React from "react";
import { Modal, Portal, Text, Button } from "react-native-paper";
import { ModalComp } from "../components/ModalComp";

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <ModalComp visible={visble} hideModal={hideModal} />
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </>
  );
};

export default MyComponent;
