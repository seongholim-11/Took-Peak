"use client";

import React, { useEffect, useState } from "react";

import Pagination from "@/components/board/Pagination";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function List() {
    const [allList, setAllList] = useState([]);
    const [page, setPage] = useState(1);
    const [searchPageCnt, setSearchPageCnt] = useState(1);

    const pathname = usePathname();
    const result = pathname.substr(7);

    useEffect(() => {
        const getBoard = async () => {
            try {
                const response = await fetch(
                    `/api/get/boardlist?board=${result}&page=${page}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setAllList(data.result);
                    const dataCnt = data.dbCnt;
                    setSearchPageCnt(dataCnt);
                } else {
                    throw new Error("Network response was not ok.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        getBoard();
    }, [page]);

    return (
        <Container className="boardlist">
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <td></td>
                            <td>제목</td>
                            <td>업로드 날짜</td>
                            <td>글쓴이</td>
                            <td>조회수</td>
                        </tr>
                    </thead>
                    {allList
                        .slice(0)
                        .reverse()
                        .map((item, idx) => {
                            return (
                                <tbody key={idx}>
                                    <tr>
                                        <td className="td1">
                                            {idx + (page - 1) * 10 + 1}
                                        </td>
                                        <td className="td2">
                                            <Link href={`/board/free/${item._id}`}>
                                                {item.title}
                                            </Link>
                                        </td>
                                        <td className="td3">{item.createdAt}</td>
                                        <td className="td4">{item.author}</td>
                                        <td className="td5">{item.view}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
                </Table>
                <Pagination
                    page={page}
                    setPage={setPage}
                    searchPageCnt={searchPageCnt}
                />
            </div>
        </Container>
    );
}
