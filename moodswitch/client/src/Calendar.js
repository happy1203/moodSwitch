import Calendar from 'react-calendar';
import React, { useState } from 'react';


export const MyCalendar = () => {
    const [value, setValue] = useState(new Date());

    const onChange = date => {
        setValue(date);
    };

    return (
        <div>
            <Calendar onChange={onChange} value={value}/>
        </div>
    );
};

