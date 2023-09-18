"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function Comments() {
    const [boardComment, setBoardComment] = useState([]);
    const [searchComment, setSearchComment] = useState([]);

    const getBoardComment = async () => {
        try {
            const response = await fetch(`/api/get/mypageboardcomment`);
            if (response.ok) {
                const data = await response.json();
                setBoardComment(data);
            } else {
                throw new Error("Network response was not ok.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const getSearchComment = async () => {
        try {
            const response = await fetch(`/api/get/mypagesearchcomment`);
            if (response.ok) {
                const data = await response.json();
                setSearchComment(data);
            } else {
                throw new Error("Network response was not ok.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // 서버에 선태된 카테고리 게시글 3개 요청하기
    useEffect(() => {
        getBoardComment();
        getSearchComment();
    }, []);
    return (
        <>
            <div className="boardComment">
                <div>게시판 댓글</div>
                <Table striped bordered hover style={{ fontSize: "0.8rem" }}>
                    <thead>
                        <tr style={{ textAlign: "center" }}>
                            <th>Title</th>
                            <th>comment</th>
                            <th>CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boardComment.map((item, idx) => {
                            let createdAt = item.createdAt.slice(0, 10);
                            return (
                                <tr key={idx}>
                                    <td>
                                        <Link
                                            href={`/board/${item.board}/${item._id}`}
                                            target="_blank"
                                            className="mypageLink"
                                        >
                                            {item.title}
                                        </Link>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {item.comment}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {createdAt}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
            <div className="searchComment">
                <div>훈련과정 댓글</div>
                <Table striped bordered hover style={{ fontSize: "0.8rem" }}>
                    <thead>
                        <tr style={{ textAlign: "center" }}>
                            <th>Title</th>
                            <th>comment</th>
                            <th>CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchComment.map((item, idx) => {
                            let createdAt = item.createdAt.slice(0, 10);
                            return (
                                <tr key={idx}>
                                    <td>
                                        <Link
                                            href={`/board/${item.board}/${item._id}`}
                                            target="_blank"
                                            className="mypageLink"
                                        >
                                            {item.title}
                                        </Link>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {item.comment}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {createdAt}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
