import React from 'react';
import './error-message.css';
//HOC to show error messages
export  const ErrorMessage = WrappedComponent => ({ showError, children }) => {
    return (
      <WrappedComponent>
        {showError && <div className="error-message">Something went wrong!</div>}
        {children}
      </WrappedComponent>
    );
  };