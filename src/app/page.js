"use client";

import { useState } from "react";
import Header from "../components/header/Header";
import AnimalCard from "../components/card-animal/CardAnimals";
import animalsData from "../data/animals.json";
import HealthRecordPage from "./animal/[id]/page";

export default function Pages() {
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {selectedAnimal ? (
                <HealthRecordPage animal={selectedAnimal} onBack={() => setSelectedAnimal(null)} />
            ) : (
                <div>
                    <Header title="Liste des animaux" />
                    <div className="px-4 pt-4 space-y-3">
                        {animalsData.map((animal) => (
                            <AnimalCard
                                key={animal.id}
                                animal={animal}
                                onClick={() => setSelectedAnimal(animal)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
