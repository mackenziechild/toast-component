import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import styles from './Toast.module.css';

import { ToastContext } from '../ToastProvider';
import VisuallyHidden from '../VisuallyHidden';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  const className = `${styles.toast} ${styles[variant]}`;
  const Icon = ICONS_BY_VARIANT[variant];
  const { dismissToast } = React.useContext(ToastContext);

  return (
    <div className={className}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {variant} - 
        </VisuallyHidden>
        {children}
      </p>
      <button 
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => dismissToast(id)}  
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
