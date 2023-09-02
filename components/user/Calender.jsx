// 메인페이지에 출력되는 달력 컴포넌트

"use client";

// react
import React, { useState } from "react";
// react-datepicker 라이브러리
import DatePicker from "react-datepicker";
// css
import "react-datepicker/dist/react-datepicker.css";

import './user.scss'

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
