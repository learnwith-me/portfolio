// dateUtils.js

// Function to get weekdays in the given date range
export const getWeekdaysInRange = (startDate, endDate) => {
    const weekdays = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= endDate) {
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        weekdays.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return weekdays;
  };
  
  // Function to get weekend dates in the given date range
  export const getWeekendDates = (startDate, endDate) => {
    const weekends = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= endDate) {
      if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
        weekends.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return weekends;
  };
  