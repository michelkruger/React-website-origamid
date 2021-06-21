import React from 'react';

import styles from '../../styles/Input.module.css';

const Input = ({label, type, placeholder, value, onChange, name, error, onBlur, ...props}) => {
    return(
        <div className={styles.wrapper} >
            <label htmlFor={name} className={styles.label} >
                {label}
            </label>
            <input 
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={styles.input} 
                onBlur={onBlur}
                {...props}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Input;