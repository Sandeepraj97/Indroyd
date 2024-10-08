import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './index.css';

const QRCodeComponent = () => {
  return (
    <div className="qrcode-container">
      <QRCodeSVG value={https://sandeepraj97.github.io/Indroyd/} />
    </div>
  );
};

export default QRCodeComponent;
