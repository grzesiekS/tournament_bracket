import React from 'react';

import styles from './FormComponents.module.scss';

export const FormComponents: React.FC<IFormComponents> = (
  { 
    ComponentType, 
    labelText,
    type,
    value,
    onChange,
    selectOptions = [],
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
      >
        {ComponentType === 'select'
          &&
          selectOptions.map(option => (
            <option 
              key={option.optionValue}
              value={option.optionValue}
            >
              {option.optionText}
            </option>
          ))
        }
      </ComponentType> 
    </>
  );
};