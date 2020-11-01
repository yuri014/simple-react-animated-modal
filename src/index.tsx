import * as React from 'react';
import styles from './styles.module.css';

interface AnimatedModalProps {
  show: boolean;
  onHide: () => void;
  title: string | React.ReactNode;
  closeButton?: React.ReactNode | string;
  style?: React.CSSProperties | undefined;
  headStyle?: React.CSSProperties | undefined;
}

const AnimatedModal: React.FC<AnimatedModalProps> = (props) => {
  return (
    <div
      className={props.show ? styles.modalBlockTrue : styles.modalBlockFalse}
    >
      <div style={props.style} className={styles.modalContent}>
        <div style={props.headStyle} className={styles.modalHead}>
          <span className={styles.modalTitle}>
            <h2>{props.title}</h2>
          </span>
          <span onClick={props.onHide} className={styles.closeModal}>
            {props.closeButton ? props.closeButton : 'X'}
          </span>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default AnimatedModal;
