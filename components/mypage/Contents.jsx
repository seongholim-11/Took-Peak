"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function Contents() {
    const [mypagecontent, setMypagecontent] = useState([]);

    // 서버에 선태된 카테고리 게시글 3개 요청하기
    useEffect(() => {
        const getBoard = async () => {
            try {
                const response = await fetch(`/api/get/mypagecontents`);
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
    }, []);
    return (
        <div className="mypagecontent">
            <Table striped bordered hover style={{ fontSize: "0.8rem" }}>
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        <th>Category</th>
                        <th>Title</th>
                        <th>CreatedAt</th>
                    </tr>
                </thead>
                <tbody>
                    {mypagecontent.map((item, idx) => {
                        let createdAt = item.createdAt.slice(0, 10);
                        return (
                            <tr key={idx}>
                                <td style={{ textAlign: "center" }}>
                                    {item.board}
                                </td>
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
                                    {createdAt}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}
