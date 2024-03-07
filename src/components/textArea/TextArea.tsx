import React from 'react';
import styles from './TextArea.module.css';

interface textAreProps {
    className?: string;
}
export const TextArea: React.FC<textAreProps> = ({ className }) => {
    return (
        <div className={styles.textAreWrapper}>
            <textarea id="w3review" name="w3review" rows={3}  className={className} placeholder="Message">
             
            </textarea>
        </div>
    )
}
