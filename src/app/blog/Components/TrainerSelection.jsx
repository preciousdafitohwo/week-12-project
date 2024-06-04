import React from "react";
import styles from "@/app/blog/blog.module.css";

export default function TrainerSelection({
  trainers,
  selectedTrainer,
  onSelect,
}) {
  return (
    <div className={styles.trainers}>
      {trainers.map((trainer, index) => (
        <button
          key={index}
          className={`${styles.trainerButton} ${
            selectedTrainer === trainer ? styles.selectedTrainer : ""
          }`}
          onClick={() => onSelect(trainer)}
        >
          {trainer}
        </button>
      ))}
    </div>
  );
}
