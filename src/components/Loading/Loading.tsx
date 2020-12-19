import React, { FunctionComponent } from 'react';

// Styles
import './Loading.scss';

const Loading: FunctionComponent = () => {
  return (
    <div className="loading-backdrop">
      <div className="loading-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
