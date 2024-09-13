import React from 'react';
import "./styles.css"

interface SpinnerProps {
  variant?: string | undefined
}

const Spinner = ({variant}:SpinnerProps) => {
  return (
    <div>
      <span className={`loader ${variant}`}></span>
    </div>
  );
};

export default Spinner;