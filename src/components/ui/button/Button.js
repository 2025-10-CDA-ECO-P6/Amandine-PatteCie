"use client";

import styles from './Button.module.css';

export default function Button({ children, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`${styles.btnPrimary} ${className}`}
        >
            {children}
        </button>
    );
}
