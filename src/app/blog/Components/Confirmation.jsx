import React from "react";
import styles from "@/app/blog/blog.module.css";

export default function Confirmation({
  trainer,
  date,
  timeSlot,
  isConfirmed,
  onConfirm,
}) {
  return (
    <div className={styles.confirmContainer}>
      <button className={styles.confirmButton} onClick={onConfirm}>
        Confirm Booking
      </button>
      {isConfirmed && (
        <div className={styles.confirmationMessage}>
          Booking confirmed for {trainer} on {date} at {timeSlot}.
        </div>
      )}
    </div>
  );
}
