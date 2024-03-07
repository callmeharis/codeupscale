import React from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
    labelText?: string;
    value?: boolean;
    readonly?: boolean;
    name: string;
    onChange?: (e: React.ChangeEvent<any>) => void;
    errors?: any;
    touched?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ labelText, value, readonly, name, onChange }) => {



    return (
        <div className={styles.checkboxWrapper}>
            <input
                type="checkbox"
                id={name}
                name={name}
                // checked={value}
                onChange={onChange}
                disabled={readonly}
                data-testid={name}
                className="checkbox"
            />
            <label htmlFor={name} className="d-flex align-items-center f-s18 text-grey label-checkbox font-poppins font-normal cursor-pointer">
                <span className="box_wrap"></span> {labelText}
            </label>
        </div>
    )
}

export default Checkbox;