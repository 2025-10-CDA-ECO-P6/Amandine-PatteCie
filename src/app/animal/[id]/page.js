// src/app/animal/[id]/page.js

"use client";

import Header from "../../../components/header/Header";
import { Syringe } from "lucide-react";

export default function AnimalHealthPage({ animal, onBack }) {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* HEADER AVEC BOUTON RETOUR */}
            <Header title={`Carnet de santé de ${animal.name}`} onBack={onBack} />

            <div className="px-4 py-4 space-y-4">
                {/* Carte de l’animal */}
                <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl p-5 text-white shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="text-lg font-bold">{animal.name}</div>
                            <div className="text-sm opacity-90">
                                Espèce: {animal.species} <br />
                                Race: {animal.breed} <br />
                                Sexe: {animal.gender} <br />
                                Naissance: {animal.birthDate} <br />
                                {animal.weight && <>Poids: {animal.weight}</>}
                            </div>
                        </div>
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl">
                            {animal.image}
                        </div>
                    </div>

                    {/* Prochains RDV */}
                    {animal.nextAppointment && (
                        <div className="bg-white/90 rounded-2xl p-4 text-gray-800">
                            <div className="font-bold text-indigo-600">Prochains RDV :</div>
                            <div className="text-sm">{animal.nextAppointment.description}</div>
                        </div>
                    )}
                </div>

                {/* Traitements */}
                {animal.treatments && (
                    <div className="bg-white rounded-2xl shadow-md p-4">
                        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <Syringe className="w-5 h-5 text-indigo-500" />
                            Traitements
                        </h2>
                        {animal.treatments.map((t, i) => (
                            <div key={i} className="bg-indigo-50 p-3 rounded-xl mb-2">
                                <div className="font-semibold text-gray-800">{t.name}</div>
                                <div className="text-sm text-gray-600 mb-2">
                                    {t.startDate} - {t.endDate} <br />
                                    Raison: {t.reason}
                                </div>
                                <ul className="list-disc list-inside text-sm text-gray-700">
                                    {t.instructions.map((instr, idx) => (
                                        <li key={idx}>{instr}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
