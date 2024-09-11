import React, { useState, useEffect } from 'react';

type ErrorMessageProps = {
  message: string;
};

const TempMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.errorContainer}>
      <span>{message}</span>
      <button style={styles.closeButton} onClick={() => setVisible(false)}>
        &#x2715;
      </button>
    </div>
  );
};

const styles = {
  errorContainer: {
    width: '350px',
    fontSize: '12px',
    transform: 'translate(-50%)',
    position: 'fixed' as const,
    top: '10px',
    left: '50%',
    padding: '10px 20px',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default TempMessage;
