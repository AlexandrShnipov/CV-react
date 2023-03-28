import React from 'react';
import s from './ButtonForPrint.module.css'

const ButtonForPrint = () => {
  const handlePrint = () => {
    window.print();
  }

  return (
    <button className={s.button} onClick={handlePrint}>Print</button>
  );
}

export default ButtonForPrint;
