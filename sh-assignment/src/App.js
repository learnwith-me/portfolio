import React, { useState } from 'react';
import WeekdayDateRangePicker from './WeekdayDateRangePicker'; // Assuming this is the file where you've defined the WeekdayDateRangePicker component

const App = () => {
  const [selectedRange, setSelectedRange] = useState([]);
  const [weekendDates, setWeekendDates] = useState([]);

  const formatDate = (date) => {
    return date.toLocaleDateString(); // Format the date as needed
  };

  const handleDateRangeChange = (range, weekends) => {
    setSelectedRange(range);
    setWeekendDates(weekends);
  };

  return (
    <div>
      <h1>Weekday Date Range Picker</h1>
      <WeekdayDateRangePicker onChange={handleDateRangeChange} />
      <div>
        <p>Selected Range: {selectedRange[0] && formatDate(selectedRange[0])} to {selectedRange[1] && formatDate(selectedRange[1])}</p>
        <p>Weekend Dates: {weekendDates.map(formatDate).join(', ')}</p>
      </div>
    </div>
  );
};

export default App;
