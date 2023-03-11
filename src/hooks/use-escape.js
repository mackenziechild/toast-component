import React from 'react';

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        callback(e);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}

export default useEscapeKey;