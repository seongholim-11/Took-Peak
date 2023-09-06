// 카테고리별 게시판의 모든 글을 출력하는 컴포넌트

"use client";

// react&next
import React, { useEffect, useState } from "react";
import Link from "next/link";
// components
import Pagination from "@/components/board/Pagination";
// bootstrap
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
// scss
import './notice.scss'

export default function List() {
    // 서버로부터 요청해서 받아온 게시글 데이터
    const [allList, setAllList] = useState([]);
    // 페이지네이션을 위한 state
    const [page, setPage] = useState(1);
    // 페이지네이션을 위한 모든 글의 개수
    const [searchPageCnt, setSearchPageCnt] = useState(1);
    // 로딩 유무
    const [loading, setLoading] = useState(true);

    // 서버로부터 게시글 데이터 받아오기
    useEffect(() => {
        const getBoard = async () => {
            try {
                // 어떤 카테고리인지와 몇 페이지인지를 쿼리 스트링으로 전달
                const response = await fetch(
                    `/api/get/noticelist?page=${page}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setAllList(data.result);
                    const dataCnt = data.dbCnt;
                    setSearchPageCnt(dataCnt);
                    setLoading(false);
                } else {
                    throw new Error("Network response was not ok.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        getBoard();
        // 페이지가 달라질 때마다 서버에 데이터 요청
    }, [page]);

    return (
        <Container className="boardlist">
            {loading ? (
                <Spinner animation="border" size="lg" />
            ) : (
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
                                let createdAt = item.createdAt.substr(0, 10);
                                return (
                                    <tbody key={idx}>
                                        <tr>
                                            {/* 페이지가 달라져도 글 번호가 이어질 수 있는 수식 */}
                                            <td className="td1">
                                                {idx + (page - 1) * 10 + 1}
                                            </td>
                                            <td className="td2">
                                                {/* 제목을 클릭하면 해당 글 상세페이지로 이동 */}
                                                <Link
                                                    href={`/notice/${item._id}`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </td>
                                            <td className="td3">
                                                {createdAt}
                                            </td>
                                            <td className="td4">
                                                {item.author}
                                            </td>
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
            )}
        </Container>
    );
}
