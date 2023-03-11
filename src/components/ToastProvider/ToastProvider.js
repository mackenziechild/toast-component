import React from "react";
import useEscapeKey from "../../hooks/use-escape";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = ({message, variant}) => {
    if (message.trim() === '') return;

    const newToast = {
      message,
      variant,
      id: Math.random(),
    }
    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);
  }

  const dismissToast = (id) => {
    const filteredToasts = toasts.filter(toast => toast.id !== id);
    setToasts(filteredToasts);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}  
    </ToastContext.Provider>
  );
}

export default ToastProvider;
