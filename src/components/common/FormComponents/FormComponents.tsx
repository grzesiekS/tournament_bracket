import React from 'react';

import styles from './FormComponents.module.scss';

interface FormComponentsInt {
  ComponentType: 'input'
  labelText: string
  type?: string
  value?: string | number
  onChange?: () => void;
}

export const FormComponents: React.FC<FormComponentsInt> = (
  { 
    ComponentType, 
    labelText,
    type,
    value,
    onChange,
  }
) => {
  return (
    <>
      <label className={styles.label}>{labelText}</label>
      <ComponentType
        className={styles[ComponentType]}
        type={type}
        value={value}
        onChange={onChange}
      />  
    </>
  );
};