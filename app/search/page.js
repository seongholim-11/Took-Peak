"use client";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import AcademySearch from "@/components/main/search/AcademySearch";
import useSearchStore from "@/stores/search";

import React, { useEffect, useState } from "react";

import "./search.scss";
import SearchResult from "./SearchResult";
import Pagination from "./Pagination";

export default function page() {
    const { searchValue, searchButton, setSearchButtonFalse } =
        useSearchStore();
    const [searchResult, setSearchResult] = useState([]);
    const [searchPageCnt, setSearchPageCnt] = useState(1);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const programSearch = async () => {
            fetch("/api/post/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ program: searchValue, page }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Network response was not ok.");
                    }
                })
                .then((data) => {
                    console.log("🚀 ~ file: page.js:39 ~ .then ~ data:", data)
                    setSearchResult(data.srchList);
                    setSearchPageCnt(data.scn_cnt)
                    setSearchButtonFalse();
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        };
        if (searchValue) {
            programSearch();
        }
    }, [searchButton, page]);

    return (
        <div>
            <Container>
                <AcademySearch />
                <div className="searchResultWrap">
                    {searchResult.length > 0 ? (
                        loading ? (
                            <Spinner animation="border" size="lg" />
                        ) : (
                            searchResult.map((item, idx) => (
                                <SearchResult item={item} idx={idx}/>
                            ))
                        )
                    ) : (
                        <p>검색된 과정이 없습니다.</p>
                    )}
                </div>
                {searchResult.length > 0 ? <Pagination page={page} setPage={setPage} searchPageCnt={searchPageCnt}/> : <div></div>}
            </Container>
        </div>
    );
}
