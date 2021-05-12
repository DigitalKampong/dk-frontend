import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Dropdown, Input, Modal } from 'semantic-ui-react';
import { getSecurityQuestions, registerUser } from '../../services/user';
import { UPDATE_CURRENT_USER } from '../../store/types';
import { SecurityQuestion } from '../../types/User';
import styles from './SignUpModal.module.scss';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
};

const SignUpModal = (props: Props) => {
  const dispatch = useDispatch();
  const { isOpen, setModalOpen } = props;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [securityQuestions, setSecurityQuestions] = useState<SecurityQuestion[]>([]);
  const [questionId, setQuestionId] = useState([-1, -1, -1]);
  const [answers, setAnswers] = useState(['', '', '']);
  const [error, setError] = useState('');
  useEffect(() => {
    getSecurityQuestions().then((response) => {
      setSecurityQuestions(response.data);
    });
  }, []);
  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);
  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);
  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);
  const handleConfirmPasswordChange = useCallback((event) => {
    setConfirmPassword(event.target.value);
  }, []);
  const handleSignUpClick = useCallback(() => {
    if (email === '' || username === '' || password === '' || questionId.some((x) => x === -1) || answers.some((x) => x === '')) {
      setError('Sign up failed. Please fill in all details and security questions.');
      setErrorModalOpen(true);
      return;
    }
    if (questionId[0] === questionId[1] || questionId[0] === questionId[2] || questionId[1] === questionId[2]) {
      setError('Sign up failed. Please do not set duplicated security questions.');
      setErrorModalOpen(true);
      return;
    }
    if (confirmPassword !== password) {
      setErrorModalOpen(true);
      setError('Sign up failed. Two passwords are different.');
      return;
    }
    registerUser({
      data: {
        username: username,
        email: email,
        password: password,
        questionAnswerSet: questionId.map((_, i) => {
          return {
            questionId: questionId[i],
            answer: answers[i],
          };
        }),
      },
    })
      .then((response) => {
        localStorage.setItem('username', email);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('authToken', response.data.token);
        dispatch({ type: UPDATE_CURRENT_USER, payload: { email: email, username: username } });
        setModalOpen(false);
      })
      .catch((error) => {
        setError('Sign up failed. The same email may have already been registered.');
        setErrorModalOpen(true);
      });
  }, [email, username, password, dispatch, setModalOpen, questionId, answers, confirmPassword]);

  return (
    <Modal
      className={styles['modal']}
      onClose={() => props.setModalOpen(false)}
      onOpen={() => props.setModalOpen(true)}
      open={isOpen}
      closeIcon
      size="mini"
    >
      <Modal.Header className={styles['modal-header']}>Sign up to Digital Kampung</Modal.Header>
      <Modal.Content className={styles['modal-content']}>
        <Input className={styles['input-field']} placeholder="Username" value={username} onChange={handleUsernameChange} />
        <Input className={styles['input-field']} placeholder="Email" value={email} onChange={handleEmailChange} />
        <Input className={styles['input-field']} placeholder="Password" type="password" value={password} onChange={handlePasswordChange} />
        <Input
          className={styles['input-field']}
          placeholder="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <Dropdown
          className={styles['input-field']}
          placeholder="Select security question 1"
          fluid
          selection
          options={securityQuestions.map((qn) => {
            return { key: qn.id, text: qn.content, value: qn.id };
          })}
          value={questionId[0]}
          onChange={(_, target) => {
            setQuestionId(questionId.map((v, i) => (i === 0 ? (target.value as number) : v)));
          }}
        />
        <Input
          className={styles['input-field']}
          placeholder="Answer 1"
          value={answers[0]}
          onChange={(event) => {
            setAnswers(answers.map((ans, i) => (i === 0 ? event.target.value : ans)));
          }}
        />
        <Dropdown
          className={styles['input-field']}
          placeholder="Select security question 2"
          fluid
          selection
          options={securityQuestions.map((qn) => {
            return { key: qn.id, text: qn.content, value: qn.id };
          })}
          value={questionId[1]}
          onChange={(_, target) => {
            setQuestionId(questionId.map((v, i) => (i === 1 ? (target.value as number) : v)));
          }}
        />
        <Input
          className={styles['input-field']}
          placeholder="Answer 2"
          value={answers[1]}
          onChange={(event) => {
            setAnswers(answers.map((ans, i) => (i === 1 ? event.target.value : ans)));
          }}
        />
        <Dropdown
          className={styles['input-field']}
          placeholder="Select security question 3"
          fluid
          selection
          options={securityQuestions.map((qn) => {
            return { key: qn.id, text: qn.content, value: qn.id };
          })}
          value={questionId[2]}
          onChange={(_, target) => {
            setQuestionId(questionId.map((v, i) => (i === 2 ? (target.value as number) : v)));
          }}
        />
        <Input
          className={styles['input-field']}
          placeholder="Answer 3"
          value={answers[2]}
          onChange={(event) => {
            setAnswers(answers.map((ans, i) => (i === 2 ? event.target.value : ans)));
          }}
        />
        <Button className={styles['signup-button']} onClick={handleSignUpClick}>
          Sign up
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
    </Modal>
  );
};

export default SignUpModal;
