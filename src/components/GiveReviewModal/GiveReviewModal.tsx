import React, { useCallback, useEffect, useState } from 'react';
import styles from './GiveReviewModal.module.css';
import { Button, Modal, Rating, TextArea } from 'semantic-ui-react';
import Stall from '../../types/Stall';
import { createReviewForStall, editReview } from '../../services/review';
import Review from '../../types/Review';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  stall: Stall | undefined;
  reviewBeforeEdit?: Review;
};

const GiveReviewModal = (props: Props) => {
  const { stall, setModalOpen, reviewBeforeEdit } = props;
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const handleRatingChange = useCallback((e, {rating, maxRating}) => {
    setRating(rating);
  }, []);
  const handleDescriptionChange = useCallback(e => setDescription(e.target.value), []);
  const handleSubmitReview = useCallback(() => {
    if (reviewBeforeEdit?.id) {
      stall && editReview(reviewBeforeEdit.id, { data: {
        rating: rating,
        description: description,
        stallId: stall.id,
      } }).then(() => {
        setModalOpen(false);
      })
    } else {
      stall && createReviewForStall(stall.id, { data: {
        rating: rating,
        description: description,
      } }).then(() => {
        setModalOpen(false);
      });
    }
  }, [stall, setModalOpen, reviewBeforeEdit, rating, description]);
  
  useEffect(() => {
    if (reviewBeforeEdit) {
      setRating(reviewBeforeEdit.rating);
      setDescription(reviewBeforeEdit.description);
    }
  }, [reviewBeforeEdit])

  return (
    <Modal
      onClose={() => setModalOpen(false)}
      onOpen={() => setModalOpen(true)}
      open={props.isOpen}
      closeIcon
    >
      <Modal.Header>
        <div className={styles['modal-header']}>{reviewBeforeEdit ? 'Editing your' : 'Leaving a'} review</div>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description className={styles['content']}>
          <div><b>{props.stall?.name}</b></div>
          <div className={styles['label']}>Give your rating</div>
          <Rating className={styles['review-ratings']} maxRating={5} rating={rating} size='massive' icon='star' onRate={handleRatingChange} />
          <div className={styles['label']}>Give your review</div>
          <TextArea className={styles['textarea']} onChange={handleDescriptionChange} value={description} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className={styles['button']} color='orange' onClick={handleSubmitReview}>
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default GiveReviewModal;