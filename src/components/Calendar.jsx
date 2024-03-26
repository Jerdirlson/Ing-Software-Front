import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  console.log("Sissi", selectedDate);


  const isSelectableDate = (date) => {
    const today = dayjs();
    const nextWeek = today.add(1, 'week');
    return date.isBefore(nextWeek) && date.day() !== 0; // Excluir domingos
  };

  const renderCustomDay = (date) => {
    const isSelectable = isSelectableDate(date);
    const isSelected = dayjs(selectedDate).isSame(date, 'day');
    console.log("Is selected: ", isSelected);
    return {
      onClick: () => isSelectable && setSelectedDate(date),
      selected: isSelected,
      disabled: !isSelectable
    };
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className='flex bg-gray-50 rounded-xl border border-gray-400'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          disablePast
          shouldDisableDate={(date) => !isSelectableDate(date)}
          date={selectedDate}
          onChange={handleDateChange}
        />
      </LocalizationProvider>
    </div>

  );
}

export default Calendar;