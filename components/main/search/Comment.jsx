"use client";

import React, { useState } from "react";

export default function Comment({ id, cnt }) {
    let [comment, setComment] = useState("");
    let [errorMessage, setErrorMessage] = useState("");

    const parent = id + cnt;

    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/post/comment", {
                method: "POST",
                body: JSON.stringify({ comment, parent }),
            });

            if (response.ok) {
                // 댓글 전송 성공
                setComment("");
                setErrorMessage("");
            } else {
                // 댓글 전송 실패
                const errorData = await response.json();
                setErrorMessage(errorData);
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("서버 오류가 발생했습니다.");
        }
    };

    return (
        <div>
            <div>댓글목록</div>
            <input
                onChange={(e) => {
                    setComment(e.target.value);
                }}
                value={comment}
            />
            <button onClick={handleSubmit}>댓글전송</button>
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        </div>
    );
}
