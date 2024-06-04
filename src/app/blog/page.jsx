"use client";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import styles from "@/app/blog/blog.module.css";
import TrainerSelection from "@/app/blog/Components/TrainerSelection.jsx";
import Calendar from "@/app/blog/Components/Calendar.jsx";
import TimeSlot from "@/app/blog/Components/TimeSlot.jsx";
import Confirmation from "@/app/blog/Components/Confirmation.jsx";

export default function Blog() {
  const [calendar, setCalendar] = useState({});
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    generateCalendar(2024, 6); // June 2024
  }, []);

  function generateCalendar(year, month) {
    const START_TIME = 9; // 9 AM
    const END_TIME = 17; // 5 PM
    const TIME_SLOT_DURATION = 60; // 60 minutes

    const generateDatesForMonth = (year, month) => {
      const startDate = dayjs(`${year}-${month}-01`);
      const endDate = startDate.endOf("month");
      let date = startDate;

      const dates = [];
      while (date <= endDate) {
        dates.push(date.format("YYYY-MM-DD"));
        date = date.add(1, "day");
      }

      return dates;
    };

    const generateTimeSlotsForDate = (date) => {
      let time = dayjs(date).hour(START_TIME).minute(0);
      const endTime = dayjs(date).hour(END_TIME).minute(0);

      const timeSlots = [];
      while (time < endTime) {
        timeSlots.push(time.format("HH:mm"));
        time = time.add(TIME_SLOT_DURATION, "minute");
      }

      return timeSlots;
    };

    const dates = generateDatesForMonth(year, month);
    const calendar = {};

    dates.forEach((date) => {
      calendar[date] = generateTimeSlotsForDate(date);
    });

    setCalendar(calendar);
  }

  const handleTrainerClick = (trainer) => {
    setSelectedTrainer(trainer);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    setIsConfirmed(false);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
    setIsConfirmed(false);
  };

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setIsConfirmed(false);
  };

  const handleConfirmClick = () => {
    setIsConfirmed(true);
    console.log(
      `Booking confirmed for ${selectedTrainer} on ${selectedDate} at ${selectedTimeSlot}`
    );
  };

  return (
    <div className={styles.bookingContainer}>
      <h1>Select a Trainer and Book a Session</h1>
      <TrainerSelection
        trainers={[
          "Maya Patel",
          "Jack Thompson",
          "Sarah Johnson",
          "David Nguyen",
        ]}
        selectedTrainer={selectedTrainer}
        onSelect={handleTrainerClick}
      />
      {selectedTrainer && (
        <div className={styles.selectionContainer}>
          <Calendar
            calendar={calendar}
            selectedDate={selectedDate}
            onSelectDate={handleDateClick}
          />
          {selectedDate && (
            <TimeSlot
              timeSlots={calendar[selectedDate]}
              selectedTimeSlot={selectedTimeSlot}
              onSelectTimeSlot={handleTimeSlotClick}
            />
          )}
          {selectedTimeSlot && (
            <Confirmation
              trainer={selectedTrainer}
              date={selectedDate}
              timeSlot={selectedTimeSlot}
              isConfirmed={isConfirmed}
              onConfirm={handleConfirmClick}
            />
          )}
        </div>
      )}
    </div>
  );
}
