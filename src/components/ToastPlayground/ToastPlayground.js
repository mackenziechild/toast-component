import React from 'react';

import Button from '../Button';

import Toast from '../Toast/Toast';

import ToastShelf from '../ToastShelf/ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  const handleAddToast = ({message, variant}) => {
    if (message.trim() === '') return;

    const newToast = {
      message,
      variant,
      id: Math.random(),
    }
    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);
    setMessage('');
    setVariant('notice');
  }

  const handleRemoveToast = (id) => {
    const filteredToasts = toasts.filter(toast => toast.id !== id);
    setToasts(filteredToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleRemoveToast={handleRemoveToast} />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput} 
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >

            {VARIANT_OPTIONS.map((variantOption, index) => (
              <div key={variantOption}>
                <label htmlFor={`variant-${variantOption}`}>
                  <input 
                    id={`variant-${variantOption}`}
                    type="radio"
                    name="variant"
                    value={variantOption}
                    checked={variant === variantOption}
                    onChange={e => setVariant(e.target.value)}
                  />
                  {variantOption}
                </label>
              </div>
            ))}
          </div>

        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button
              onClick={() => handleAddToast({message, variant})}
            >Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;