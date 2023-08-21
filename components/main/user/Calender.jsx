"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calender() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="calender">
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
            />
        </div>
    );
}
