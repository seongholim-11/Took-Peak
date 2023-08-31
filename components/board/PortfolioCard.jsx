"use client";

import React, { useEffect, useState } from "react";

import Pagination from "@/components/board/Pagination";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "./board.scss";

export default function List() {
    const [allList, setAllList] = useState([]);
    const [page, setPage] = useState(1);
    const [searchPageCnt, setSearchPageCnt] = useState(1);
    // 로딩 유무
    const [loading, setLoading] = useState(true);

    const pathname = usePathname();
    const result = pathname.substr(7);

    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
            const content = str.slice(0, maxLength) + "...";
            return content;
        } else {
            return str;
        }
    }

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
                    setLoading(false);
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
        <Container className="portfoliocard">
            {loading ? (
                <div className="loading">
                    <Spinner animation="border" size="lg" />
                </div>
            ) : (
                <div>
                    <div className="cardWrap">
                        {allList
                            .slice(0)
                            .reverse()
                            .map((item, idx) => {
                                return (
                                    <Link
                                        href={`/board/portfolio/${item._id}`}
                                        key={idx}
                                    >
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={item.image}
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    {item.title}
                                                </Card.Title>
                                                <Card.Text>
                                                    {truncateString(
                                                        item.content,
                                                        30
                                                    )}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                );
                            })}
                    </div>
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
