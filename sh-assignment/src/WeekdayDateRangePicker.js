import React, { useState } from "react";
import Calendar from "react-calendar"; // Assuming you have a calendar library, you may use any other library or custom implementation

const WeekdayDateRangePicker = ({ onChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date) => {
    // Check if selected date is a weekday (Monday to Friday)
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      if (!startDate) {
        setStartDate(date);
      } else if (!endDate) {
        setEndDate(date);
      } else {
        setStartDate(date);
        setEndDate(null);
      }
    }
  };

  const handlePredefinedRange = (range) => {
    const today = new Date();
    let newStartDate = null;
    let newEndDate = today;

    switch (range) {
      case "last7Days":
        newStartDate = new Date(today);
        newStartDate.setDate(today.getDate() - 6);
        break;
      case "last30Days":
        newStartDate = new Date(today);
        newStartDate.setDate(today.getDate() - 29);
        break;
      // Add more cases for other predefined ranges as needed
      default:
        break;
    }

    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  const getWeekendDatesInRange = () => {
    const weekendDates = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
        weekendDates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return weekendDates;
  };

  const handleChange = () => {
    const weekendDates = getWeekendDatesInRange();
    onChange([startDate, endDate], weekendDates);
  };

  return (
    <div>
      <div>
        <Calendar
          onChange={handleDateChange}
          value={startDate}
          tileDisabled={({ date }) =>
            date.getDay() === 0 || date.getDay() === 6
          }
        />
      </div>
      <div>
        <button onClick={() => handlePredefinedRange("last7Days")}>
          Last 7 Days
        </button>
        <button onClick={() => handlePredefinedRange("last30Days")}>
          Last 30 Days
        </button>
        {/* Add more buttons for other predefined ranges */}
      </div>
      <button onClick={handleChange}>Apply</button>
    </div>
  );
};

export default WeekdayDateRangePicker;
