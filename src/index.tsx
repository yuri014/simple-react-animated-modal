import * as React from 'react';
import styles from './styles.module.css';

interface AnimatedModalProps {
  show: boolean;
  onHide: () => void;
  title: string | React.ReactNode;
  icon?: React.ReactNode;
}

export const AnimatedModal: React.FC<AnimatedModalProps> = (props) => {
  return (
    <div
      className={props.show ? styles.modalBlockTrue : styles.modalBlockFalse}
    >
      <div className={styles.modalContent}>
        <div className={styles.modalHead}>
          <div className={styles.modalTitle}>
            <h2>{props.title}</h2>
          </div>
          <div onClick={props.onHide} className={styles.closeModal}>
            {props.icon ? props.icon : 'X'}
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};
