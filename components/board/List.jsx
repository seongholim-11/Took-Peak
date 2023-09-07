// 카테고리별 게시판의 모든 글을 출력하는 컴포넌트

"use client";

// react&next
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// components
import Pagination from "@/components/board/Pagination";
// zustand
import usePageStore from "@/stores/page";
// bootstrap
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
// scss
import "./board.scss";

export default function List() {
    // 페이지네이션을 위한 state, 상세페이지에서 뒤로 갈 때 state가 초기화되지 않게 zustand 사용
    const { pageValue } = usePageStore();
    // 서버로부터 요청해서 받아온 게시글 데이터
    const [allList, setAllList] = useState([]);
    // 페이지네이션을 위한 모든 글의 개수
    const [searchPageCnt, setSearchPageCnt] = useState(1);
    // 로딩 유무
    const [loading, setLoading] = useState(true);

    // 어떤 카테고리인지 알 수 있게 url에서 카테고리 데이터 저장하기
    const pathname = usePathname();
    const result = pathname.substr(7);

    // 서버로부터 게시글 데이터 받아오기
    useEffect(() => {
        const getBoard = async () => {
            try {
                // 어떤 카테고리인지와 몇 페이지인지를 쿼리 스트링으로 전달
                const response = await fetch(
                    `/api/get/boardlist?board=${result}&page=${pageValue}`
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
    }, [pageValue]);

    return (
        <Container className="boardlist">
            {loading ? (
                <Spinner animation="border" size="lg" />
            ) : (
                <div className="listWrap">
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
                        {allList.map((item, idx) => {
                            let createdAt = item.createdAt.substr(0, 10);
                            return (
                                <tbody key={idx}>
                                    <tr>
                                        {/* 페이지가 달라져도 글 번호가 이어질 수 있는 수식 */}
                                        <td className="td1">
                                            {searchPageCnt-idx}
                                        </td>
                                        <td className="td2">
                                            {/* 제목을 클릭하면 해당 글 상세페이지로 이동 */}
                                            <Link
                                                href={`/board/${result}/${item._id}`}
                                            >
                                                {item.title}
                                            </Link>
                                        </td>
                                        <td className="td3">
                                            {createdAt}
                                        </td>
                                        <td className="td4">{item.author}</td>
                                        <td className="td5">{item.view}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </Table>
                    <Pagination
                        searchPageCnt={searchPageCnt}
                    />
                </div>
            )}
        </Container>
    );
}
