'use client'

import React, { useEffect, useState } from "react";

export default function Contents() {
const [mypagecontent, setMypagecontent] = useState([])

// 서버에 선태된 카테고리 게시글 3개 요청하기
useEffect(() => {
    const getBoard = async () => {
        try {
            const response = await fetch(
                `/api/get/mypagecontents`
            );
            if (response.ok) {
                const data = await response.json();
                setMypagecontent(data.result);
            } else {
                throw new Error("Network response was not ok.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    getBoard();
    // 사용자가 탭을 눌러 카테고리가 바뀔 때마다 get 요청
}, []);
console.log("🚀 ~ file: Contents.jsx:7 ~ Contents ~ mypagecontent:", mypagecontent)
    return <div>Contents</div>;
}
