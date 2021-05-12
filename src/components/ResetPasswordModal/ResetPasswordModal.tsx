import React, { useState } from 'react';
import { Button, Input, Modal } from 'semantic-ui-react';
import { updatePassword, validateSecurityAnswer } from '../../services/user';
import User from '../../types/User';
import styles from './ResetPasswordModal.module.scss';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  userToReset: User;
};

const ResetPasswordModal = (props: Props) => {
  const { isOpen, setModalOpen, userToReset } = props;
  const [answers, setAnswers] = useState(['', '', '']);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const handleResetPassword = () => {
    if (confirmPassword !== password) {
      setErrorModalOpen(true);
      setError('Reset password failed. Two passwords are different.');
      return;
    }
    userToReset.UserAnswers &&
      validateSecurityAnswer({
        data: {
          userId: userToReset.id,
          questionAnswerSet: userToReset.UserAnswers.map((q, i) => {
            return { questionId: q.SecurityQuestion.id, answer: answers[i] };
          }),
        },
      })
        .then((res) => {
          const resetToken = res.data['resetToken'];
          updatePassword(resetToken, {
            data: { newPassword: password },
          })
            .then((res2) => {
              setSuccessModalOpen(true);
            })
            .catch((error) => {
              setError('Reset password failed. New password is not valid.');
              setErrorModalOpen(true);
            });
        })
        .catch((error) => {
          setError('Reset password failed. Security answers are incorrect.');
          setErrorModalOpen(true);
        });
  };

  return (
    <Modal
      className={styles['modal']}
      onClose={() => props.setModalOpen(false)}
      onOpen={() => props.setModalOpen(true)}
      open={isOpen}
      closeIcon
      size="mini"
    >
      <Modal.Header className={styles['modal-header']}>Reset Password</Modal.Header>
      <Modal.Content className={styles['modal-content']}>
        <div className={styles['input-field']}>{userToReset.UserAnswers && userToReset.UserAnswers[0].SecurityQuestion.content}</div>
        <Input
          className={styles['input-field']}
          placeholder="Answer"
          value={answers[0]}
          onChange={(event) => {
            setAnswers(answers.map((ans, i) => (i === 0 ? event.target.value : ans)));
          }}
        />
        <div className={styles['input-field']}>{userToReset.UserAnswers && userToReset.UserAnswers[1].SecurityQuestion.content}</div>
        <Input
          className={styles['input-field']}
          placeholder="Answer"
          value={answers[1]}
          onChange={(event) => {
            setAnswers(answers.map((ans, i) => (i === 1 ? event.target.value : ans)));
          }}
        />
        <div className={styles['input-field']}>{userToReset.UserAnswers && userToReset.UserAnswers[2].SecurityQuestion.content}</div>
        <Input
          className={styles['input-field']}
          placeholder="Answer"
          value={answers[2]}
          onChange={(event) => {
            setAnswers(answers.map((ans, i) => (i === 2 ? event.target.value : ans)));
          }}
        />
        <Input
          className={styles['input-field']}
          placeholder="New password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Input
          className={styles['input-field']}
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          type="password"
        />
        <Button className={styles['signup-button']} onClick={handleResetPassword}>
          Confirm
        </Button>
      </Modal.Content>
      <Modal
        basic
        className={styles['login-modal']}
        onClose={() => setErrorModalOpen(false)}
        onOpen={() => setErrorModalOpen(true)}
        open={errorModalOpen}
        content={error}
        actions={['Ok']}
      />
      <Modal
        basic
        className={styles['login-modal']}
        onClose={() => {
          setSuccessModalOpen(false);
          setModalOpen(false);
        }}
        onOpen={() => setSuccessModalOpen(true)}
        open={successModalOpen}
        content={'Reset password succeed. Please log in with the new password.'}
        actions={['Ok']}
      />
    </Modal>
  );
};

export default ResetPasswordModal;
