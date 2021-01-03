import React from 'react';
import { Button, Input, Modal } from 'semantic-ui-react';
import styles from './SignUpModal.module.css';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
};

const SignUpModal = (props: Props) => {
  return (
    <Modal
      className={styles["modal"]}
      onClose={() => props.setModalOpen(false)}
      onOpen={() => props.setModalOpen(true)}
      open={props.isOpen}
      closeIcon
      size="mini"
    >
      <Modal.Header className={styles["modal-header"]}>Sign up to Digital Kampong</Modal.Header>
      <Modal.Content className={styles["modal-content"]}>
        <Input className={styles["input-field"]} placeholder="Username" />
        <Input className={styles["input-field"]} placeholder="Password" type="password" />
        <Input className={styles["input-field"]} placeholder="Mobile number or email" />
        <Button className={styles["signup-button"]}>Sign up</Button>
      </Modal.Content>
    </Modal>
  );
};

export default SignUpModal;