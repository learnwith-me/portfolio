import React, { useState } from 'react';
import { DateRangePicker, Button } from 'rsuite';
import { getWeekdaysInRange, getWeekendDates } from './dateUtils';
import "./App.css"

const RsuiteRangePicker = ({ onChange, predefinedRanges }) => {
  const [value, setValue] = useState([]);

  const handleSelect = (value) => {
    setValue(value);
    if (onChange) {
      const weekdays = getWeekdaysInRange(value[0], value[1]);
      const weekends = getWeekendDates(value[0], value[1]);
      onChange([weekdays, weekends]);
    }
  };

  const handlePredefinedRange = (range) => {
    setValue(range);
    if (onChange) {
      const weekdays = getWeekdaysInRange(range[0], range[1]);
      const weekends = getWeekendDates(range[0], range[1]);
      onChange([weekdays, weekends]);
    }
  };

  return (
    <div>
      <DateRangePicker
        value={value}
        onChange={handleSelect}
        disabledDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      {predefinedRanges && (
        <div>
          {Object.keys(predefinedRanges).map((range) => (
            <Button key={range} onClick={() => handlePredefinedRange(predefinedRanges[range])}>
              {range}
            </Button>
          ))}
        </div>
      )}
      <Button onClick={() => setValue([])}>Clear</Button>
    </div>
  );
};

export default RsuiteRangePicker;
