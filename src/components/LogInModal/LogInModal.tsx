import React from 'react';
import { Button, Checkbox, Input, Modal } from 'semantic-ui-react';
import styles from './LogInModal.module.css';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
};

const LogInModal = (props: Props) => {
  return (
    <Modal
      className={styles["modal"]}
      onClose={() => props.setModalOpen(false)}
      onOpen={() => props.setModalOpen(true)}
      open={props.isOpen}
      closeIcon
      size="mini"
    >
      <Modal.Header className={styles["modal-header"]}>Log in to Digital Kampong</Modal.Header>
      <Modal.Content className={styles["modal-content"]}>
        <Input className={styles["input-field"]} placeholder="Username" />
        <Input className={styles["input-field"]} placeholder="Password" type="password" />
        <Button className={styles["login-button"]}>Log in</Button>
        <div className={styles["modal-row"]}>
          <Checkbox className={styles["checkbox"]} label='Remember me' />
          <div className={styles["link-text"]}>
            Forgot password?
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions className={styles["modal-footer"]}>
        <Button className={styles["signup-button"]}>Create new account</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default LogInModal;