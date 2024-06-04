import React from "react";
import dayjs from "dayjs";
import styles from "@/app/blog/blog.module.css";

export default function Calendar({ calendar, selectedDate, onSelectDate }) {
  const renderCalendarGrid = () => {
    const daysInWeek = 7;
    const firstDayOfMonth = dayjs(Object.keys(calendar)[0]).day();
    const dates = Object.entries(calendar);
    const calendarGrid = [];

    // Fill in the blank days at the start of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarGrid.push(
        <div key={`blank-start-${i}`} className={styles.blank}></div>
      );
    }

    // Fill in the actual days of the month
    dates.forEach(([date, timeSlots]) => {
      calendarGrid.push(
        <div
          key={date}
          className={`${styles.date} ${
            selectedDate === date ? styles.selectedDate : ""
          }`}
          onClick={() => onSelectDate(date)}
        >
          <h2>{dayjs(date).date()}</h2>
        </div>
      );
    });

    // Fill in the blank days at the end of the month
    const totalCells = firstDayOfMonth + dates.length;
    const remainingCells =
      totalCells % daysInWeek === 0
        ? 0
        : daysInWeek - (totalCells % daysInWeek);
    for (let i = 0; i < remainingCells; i++) {
      calendarGrid.push(
        <div key={`blank-end-${i}`} className={styles.blank}></div>
      );
    }

    return calendarGrid;
  };

  return <div className={styles.calendar}>{renderCalendarGrid()}</div>;
}
