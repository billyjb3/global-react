import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOnClickout } from '../../hooks';
import './styles.css';

export const Modal = (props) => {
  const {
    onClose,
    className = '',
    overlayClass = '',
    children,
  } = props;
  const contentRef = useRef(null);
  useOnClickout(contentRef, onClose);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  return createPortal(
    <>
      <div className={`modalOverlay ${overlayClass}`} />
      <div className={`modalContainer`}>
        <div
          ref={contentRef}
          className={`modalContent ${className}`}
        >
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};
