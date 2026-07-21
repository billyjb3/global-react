import React from 'react';
import { IconLoadingCircles } from '../../Icons';
import './styles.css';

export const SpinnerOverlay = (props) => {
  const {
    isOn,
    children,
    className = '',
    backgroundClass = '',
    spinnerClass = '',
  } = props;

  return isOn ? (
    <div className={`overlayContainer ${className}`}>
      <div className={`overlayBackground ${backgroundClass}`} />
      <div className={`overlayForeground`}>
        <IconLoadingCircles size="96px" className={`${spinnerClass} spinner`} />
      </div>
      {children}
    </div>
  ) : children;
};
