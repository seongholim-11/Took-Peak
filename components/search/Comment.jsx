// 게시글 상세페이지의 댓글 내용을 입력받고 출력하는 컴포넌트

'use client'

// react
import React, { useState, useEffect } from "react";
// components
import AllComment from "./AllComment";
// react-icons
import { BsFillSendFill } from "react-icons/bs";
// scss
import './search.scss'

// 게시글의 상세페이지에서 글의 id와 프로그램 회차를 받아옴
export default function Comment({ id, cnt }) {
    // 댓글들의 부모글을 구분할 수 있는 값
    const parent = id + cnt;

    // 입력받은 댓글 내용
    const [comment, setComment] = useState("");
    // 서버로부터 받아온 해당 글의 모든 댓글 데이터
    const [allComment, setAllComment] = useState([]);
    // POST 요청이 실패했을 때 출력되는 에러 메시지
    const [errorMessage, setErrorMessage] = useState("");
    // 댓글을 입력하고 댓글 목록을 바로 업데이트하기 위한 state
    const [updateComment, setUpdateComment] = useState(false);

    // 댓글 입력 시 서버에 DB 저장을 요청
    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/post/searchComment", {
                method: "POST",
                body: JSON.stringify({ comment, parent }),
            });
            // 서버 통신 성공 시
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

    // 처음 마운트되거나 댓글이 입력되었을 때, 댓글 목록 업데이트
    useEffect(() => {
        const getComment = async () => {
            try {
                // 댓글의 부모글을 확인하기 위해 쿼리스트링으로 데이터 전달
                const response = await fetch(`/api/get/searchComment?parent=${parent}`);

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
            {/* 댓글 출력 컴포넌트에 댓글 데이터 전달 */}
            <AllComment allComment={allComment} />
            <div className="inputComment">
                <input
                    onChange={(e) => setComment(e.target.value)}
                    // 오류메시지가 있으면 오류메시지를 placeholder에 출력
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
