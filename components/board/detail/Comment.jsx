"use client";

// react
import React, { useState, useEffect } from "react";
// components
import AllComment from "./AllComment";
import NotLoginUser from "@/components/user/NotLoginUser";
// bootstrap
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
// react-icons
import { BsFillSendFill } from "react-icons/bs";

import "./comment.scss";

// Detail 페이지로부터 받아오는 해당 글의 정보들
export default function Comment({ result }) {
    // 사용자가 입력하는 댓글
    const [comment, setComment] = useState("");
    // 글에 맞게 get 요청으로 받아오는 댓글들
    const [allComment, setAllComment] = useState([]);
    // 오류가 났을 때, 서버로부터 받아오는 오류 메시지
    const [errorMessage, setErrorMessage] = useState("");
    // 댓글을 입력하고 댓글 목록이 업데이트 되도록 하는 상태값
    const [updateComment, setUpdateComment] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    // 댓글의 부모 글 확인을 위해 ID 값
    const { _id } = result;

    const handleSubmit = async () => {
        try {
            // 댓글 저장을 위한 POST 요청
            // 댓글 내용과 부모 글의 id 값 전송
            const response = await fetch("/api/post/boardComment", {
                method: "POST",
                // 범객체 타입을 전송하기 위해서는 stringify 사용
                body: JSON.stringify({ comment, _id }),
            });

            // 서버와의 통신이 성공하면
            if (response.ok) {
                // 댓글 입력창 초기화
                setComment("");
                // 에러 메시지 초기화
                setErrorMessage("");
                // 댓글 목록 업데이트를 위해 상태값 변화
                setUpdateComment(true);
                // 서버와의 통신이 실패하면
            } else {
                // 서버로부터 오류 메시지 저장
                const errorData = await response.json();
                // 입력창 초기화
                setComment("");
                setShow(true);
                // 오류 메시지 state에 저장
                setErrorMessage(errorData);
            }
        } catch (error) {
            setComment("");
            console.error("Error:", error);
        }
    };

    // 댓글 목록 업데이트를 위해 get 요청
    useEffect(() => {
        const getComment = async () => {
            try {
                // 댓글의 부모 글 id를 query string으로 전달
                const response = await fetch(
                    `/api/get/boardComment?parent=${_id}`
                );
                // 서버와의 통신이 성공하면
                if (response.ok) {
                    const data = await response.json();
                    // 해당 글의 모든 댓글 데이터 저장
                    setAllComment(data);
                    // 댓글 목록 업데이트를 위해 상태값 변화
                    setUpdateComment(false);
                } else {
                    throw new Error("Network response was not ok.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        getComment();
        // updateComment의 상태가 변할 때마다 댓글 목록 업데이트
    }, [updateComment]);

    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SIGN UP & LOGIN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NotLoginUser />
                </Modal.Body>
            </Modal>
            <div className="comment">
                {/* 댓글 목록 */}
                <AllComment allComment={allComment} />
                <div className="inputComment">
                    {/* 
                    댓글 입력창
                    오류가 발생하면 에러 메시지 출력
                    */}
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
