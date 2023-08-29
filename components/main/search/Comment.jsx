import React, { useState, useEffect } from "react";
import { BsFillSendFill } from "react-icons/bs";
import AllComment from "./AllComment";

import './search.scss'

export default function Comment({ id, cnt }) {
    const parent = id + cnt;

    const [comment, setComment] = useState("");
    const [allComment, setAllComment] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [updateComment, setUpdateComment] = useState(false);

    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/post/comment", {
                method: "POST",
                body: JSON.stringify({ comment, parent }),
            });

            if (response.ok) {
                setComment("");
                setErrorMessage("");
                setUpdateComment(true);
            } else {
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
                const response = await fetch(`/api/get/comment?parent=${parent}`);

                if (response.ok) {
                    const data = await response.json();
                    setAllComment(data);
                    setUpdateComment(false);
                } else {
                    throw new Error("Network response was not ok.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        getComment();
    }, [updateComment]);

    return (
        <div className="comment">
            <h4>훈련과정 후기</h4>
            <AllComment allComment={allComment} />
            <div className="inputComment">
                <input
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={errorMessage || comment}
                    value={comment}
                />
                <button onClick={handleSubmit}>
                    <BsFillSendFill />
                </button>
            </div>
        </div>
    );
}
