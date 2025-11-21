"use client";

import { useState } from 'react';
import Header from '@/components/header/Header';
import CardAnimals from '@/components/card-animal/CardAnimals';
import { Search } from 'lucide-react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import animalsData from '@/data/animals.json';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("Tous");
    const router = useRouter();

    const tabs = ["Tous", "Chiens", "Chats"];

    const filteredAnimals = animalsData.filter(animal => {
        const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            animal.owner.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTab = activeTab === "Tous" || animal.species === activeTab;
        return matchesSearch && matchesTab;
    });

    const handleAnimalClick = (animal) => {
        router.push(`/animal/${animal.id}`);
    };

    return (
        <div className={styles.pageContainer}>
            <Header title="Liste des animaux de la clinique" />

            <div className={styles.contentPadding}>
                <div className={`${styles.animalsListHeader} animate-fade-in`}>
                    <div className={styles.animalsListTitle}>
                        Hello, Dr. Stone !
                    </div>
                    <div className={styles.searchContainer}>
                        <Search className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.animalsListSearch}
                        />
                    </div>
                </div>

                <div className={styles.animalsListTabs}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`${styles.animalsListTab} ${activeTab === tab ? styles.active : ''}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className={styles.animalsList}>
                    {filteredAnimals.map((animal) => (
                        <CardAnimals
                            key={animal.id}
                            animal={animal}
                            onClick={() => handleAnimalClick(animal)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
