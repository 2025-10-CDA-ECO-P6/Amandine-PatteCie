"use client";

import { Home } from "lucide-react";
import styles from './Header.module.css';

export default function Header({ title, onBack }) {
    return (
        <header className={styles.headerContainer}>
            {onBack ? (
                <button onClick={onBack} className={styles.headerBackButton}>
                    <Home className={styles.headerBackIcon} />
                    Retour
                </button>
            ) : (
                <div className={styles.headerSpacer}></div>
            )}
            <h1 className={styles.headerTitle}>{title}</h1>
            <div className={styles.headerSpacer}></div>
        </header>
    );
}
