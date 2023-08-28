"use client";

import { BsFillSendFill } from "react-icons/bs"; 

import React, { useState, useEffect } from "react";
import AllComment from "./AllComment";

export default function Comment({ id, cnt }) {
    let [comment, setComment] = useState("");
    let [allComment, setAllComment] = useState([]);
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

    useEffect(() => {
        const getComment = async () => {
            try {
                const response = await fetch(
                    `/api/get/comment?parent=${parent}`
                );

                if (response.ok) {
                    const data = await response.json();
                    setAllComment(data);
                } else {
                    throw new Error("Network response was not ok.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        getComment();
    }, []);
    return (
        <div className="comment">
            <h4>훈련과정 후기</h4>
            <AllComment allComment={allComment} />
            <div className="inputComment">
                <input
                    onChange={(e) => {
                        setComment(e.target.value);
                    }}
                    value={comment}
                />
                <button onClick={handleSubmit}><BsFillSendFill /></button>
            </div>
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        </div>
    );
}
