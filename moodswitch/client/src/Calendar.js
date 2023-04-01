import Calendar from 'react-calendar';
import React, { useState } from 'react';
import { render } from "react-dom";

export const MyCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar onChange={onChange} value={value}/>
        </div>
    );
};

render(<MyCalendar />); 