"use client";

import React, { useState, useEffect } from "react";
import { BsFillSendFill } from "react-icons/bs";
import AllComment from "./AllComment";
import Container from "react-bootstrap/Container";

import "./comment.scss";

export default function Comment({ result }) {
    const [comment, setComment] = useState("");
    const [allComment, setAllComment] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [updateComment, setUpdateComment] = useState(false);

    const { _id } = result;

    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/post/boardComment", {
                method: "POST",
                body: JSON.stringify({ comment, _id }),
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
                const response = await fetch(
                    `/api/get/boardComment?parent=${_id}`
                );

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
        <Container>
            <div className="comment">
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
        </Container>
    );
}
