import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';



export const MyCalendar = () => {
    const [value, setValue] = useState(new Date());

    const onChange = date => {
        setValue(date);
    };

    return (
        <div id='calendar-body'>
            
            <Calendar onChange={onChange} value={value}/>
        </div>
    );
};

