"use client";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import AcademySearch from "@/components/main/search/AcademySearch";
import useSearchStore from "@/stores/search";

import React, { useEffect, useState } from "react";

import Link from "next/link";

import "./search.scss";

export default function page() {
    const { searchValue, searchButton, setSearchButtonFalse } =
        useSearchStore();
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const programSearch = async () => {
            fetch("/api/post/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ program: searchValue }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Network response was not ok.");
                    }
                })
                .then((data) => {
                    setSearchResult(data.srchList);
                    setSearchButtonFalse();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        };
        if (searchValue) {
            programSearch();
        }
    }, [searchButton]);

    return (
        <div>
            <Container>
            <AcademySearch />
                {searchResult.length > 0 ? (
                    searchResult.map((item, idx) => (
                        <div key={idx} className="searchResult">
                            <div className="row1">
                                <div className="row1-1">
                                    <span className="col1">
                                        {item.subTitle}
                                    </span>
                                    <span className="col2">{`${item.address}(${item.telNo})`}</span>
                                </div>
                                <div className="row1-1">
                                    <span className="col1">{item.title}</span>
                                    <span className="col2">{`${item.traStartDate} ~ ${item.traEndDate}`}</span>
                                </div>
                            </div>
                            <div className="row2">
                                <Link href={`/search/${item.trprId}`}>
                                    <Button variant="primary">더보기</Button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>검색된 과정이 없습니다.</p>
                )}
            </Container>
        </div>
    );
}
