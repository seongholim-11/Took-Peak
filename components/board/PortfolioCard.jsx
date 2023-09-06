// 포트폴리오 게시판의 모든 글을 출력하는 컴포넌트

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
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
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

    // 글 내용을 일정 길이만 출력 후 생략하는 function
    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
            const content = str.slice(0, maxLength) + "...";
            return content;
        } else {
            return str;
        }
    }

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
        <Container className="portfoliocard">
            {loading ? (
                <div className="loading">
                    <Spinner animation="border" size="lg" />
                </div>
            ) : (
                <div>
                    <div className="cardWrap">
                        {allList.map((item, idx) => {
                            return (
                                <Link
                                    // 제목을 클릭하면 해당 글 상세페이지로 이동
                                    href={`/board/portfolio/${item._id}`}
                                    key={idx}
                                >
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                        />
                                        <Card.Body>
                                            <div className="titletext">
                                                <Card.Title>
                                                    {item.title}
                                                </Card.Title>
                                                <Card.Text>
                                                    {truncateString(
                                                        item.content,
                                                        30
                                                    )}
                                                </Card.Text>
                                            </div>
                                            <div className="authorview">
                                                <div className="author">
                                                    {item.author}
                                                </div>
                                                <div className="view">
                                                    view: {item.view}
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                    <Pagination searchPageCnt={searchPageCnt} />
                </div>
            )}
        </Container>
    );
}
