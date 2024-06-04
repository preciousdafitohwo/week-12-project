import React from "react";
import styles from "@/app/blog/blog.module.css";

export default function TimeSlot({
  timeSlots,
  selectedTimeSlot,
  onSelectTimeSlot,
}) {
  return (
    <div className={styles.timeSlotsContainer}>
      {timeSlots.map((timeSlot, index) => (
        <button
          key={index}
          className={`${styles.timeSlot} ${
            selectedTimeSlot === timeSlot ? styles.selectedTimeSlot : ""
          }`}
          onClick={() => onSelectTimeSlot(timeSlot)}
        >
          {timeSlot}
        </button>
      ))}
    </div>
  );
}
