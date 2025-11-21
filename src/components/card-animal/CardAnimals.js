"use client";

import { ChevronRight } from "lucide-react";
import styles from './CardAnimals.module.css';

export default function CardAnimals({animal, onClick}) {
    return (
        <div onClick={onClick} className={`${styles.animalCard} animate-fade-in`}>
            <div className={styles.animalCardContent}>
                <div className={styles.animalCardAvatar}>
                    {animal.image}
                </div>
                <div>
                    <div className={styles.animalCardName}>{animal.name}</div>
                    <div className={styles.animalCardOwner}>
                        Propriétaire: {animal.owner}
                    </div>
                </div>
            </div>
            <ChevronRight className={styles.animalCardIcon} />
        </div>
    );
}
