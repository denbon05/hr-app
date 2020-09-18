import React, { useState } from 'react';
import Calendar from 'react-calendar';

function ReactCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        className={['c1','c2']}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default ReactCalendar;