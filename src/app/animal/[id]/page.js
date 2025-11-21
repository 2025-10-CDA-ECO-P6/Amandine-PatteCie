"use client";

import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/header/Header';
import { Syringe, Calendar, User } from 'lucide-react';
import styles from './page.module.css';
import animalsData from '@/data/animals.json';

export default function AnimalHealthPage() {
    const params = useParams();
    const router = useRouter();
    const animal = animalsData.find(a => a.id === parseInt(params.id));

    if (!animal) {
        return (
            <div className={styles.healthPageContainer}>
                <Header title="Animal non trouvé" onBack={() => router.push('/')} />
                <div className={styles.healthContentPadding}>
                    <p>Aucun animal trouvé avec cet identifiant.</p>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return (
        <div className={styles.healthPageContainer}>
            <Header
                title={`Carnet de santé de ${animal.name}`}
                onBack={() => router.push('/')}
            />

            <div className={styles.healthContentPadding}>
                <div className={`${styles.healthCardGradient} animate-fade-in`}>
                    <div className={styles.healthCardHeader}>
                        <div className={styles.healthCardInfo}>
                            <div className={styles.healthCardName}>{animal.name}</div>
                            <div className={styles.healthCardDetails}>
                                Espèce: {animal.species} <br />
                                Race: {animal.breed} <br />
                                Sexe: {animal.gender} <br />
                                Naissance: {formatDate(animal.birthDate)} <br />
                                {animal.weight && <>Poids: {animal.weight}<br /></>}
                                {animal.color && <>Couleur: {animal.color}<br /></>}
                                {animal.identification && <>N° d'identification: {animal.identification}</>}
                            </div>
                        </div>
                        <div className={styles.healthCardImageContainer}>
                            {animal.image}
                        </div>
                    </div>

                    {animal.nextAppointment && (
                        <div className={styles.healthCardAppointment}>
                            <div className={styles.healthCardAppointmentTitle}>
                                Prochain RDV :
                            </div>
                            <div className={styles.healthCardAppointmentDescription}>
                                {animal.nextAppointment.description}
                            </div>
                        </div>
                    )}
                </div>

                {animal.upcomingAppointments && animal.upcomingAppointments.length > 0 && (
                    <div className={`${styles.treatmentContainer} animate-fade-in`}>
                        <h2 className={styles.treatmentHeader}>
                            <Calendar className={styles.treatmentIcon} />
                            Prochains RDV
                        </h2>
                        {animal.upcomingAppointments.map((appointment, i) => (
                            <div key={i} className={styles.appointmentCard}>
                                <div className={styles.appointmentDoctor}>
                                    <User className={styles.doctorIcon} />
                                    {appointment.doctor}
                                </div>
                                <div className={styles.appointmentType}>{appointment.type}</div>
                                <div className={styles.appointmentDateTime}>
                                    RDV le {formatDate(appointment.date)} à {appointment.time}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {animal.treatments && animal.treatments.length > 0 && (
                    <div className={`${styles.treatmentContainer} animate-fade-in`}>
                        <h2 className={styles.treatmentHeader}>
                            <Syringe className={styles.treatmentIcon} />
                            Traitements
                        </h2>
                        {animal.treatments.map((t, i) => (
                            <div key={i} className={styles.treatmentCard}>
                                <div className={styles.treatmentName}>{t.name}</div>
                                <div className={styles.treatmentDates}>
                                    Date de début: {formatDate(t.startDate)} <br />
                                    Date de fin: {formatDate(t.endDate)} <br />
                                    Raison: {t.reason}
                                </div>
                                <ul className={styles.treatmentInstructions}>
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
