"use client";

import Container from "react-bootstrap/Container";

import AcademySearch from "@/components/search/main/AcademySearch";
import useSearchStore from "@/stores/search";

import React, { useEffect, useState } from "react";

import "./search.scss";
import SearchResult from "../../components/search/SearchResult";
import Pagination from "../../components/search/Pagination";

export default function page() {
    const { searchValue, searchButton, setSearchButtonFalse, page, setPage } =

        useSearchStore();
    const [searchResult, setSearchResult] = useState([]);
    const [searchPageCnt, setSearchPageCnt] = useState(1);
    // const [page, setPage] = useState(1);

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
                    setSearchResult(data.srchList);
                    setSearchPageCnt(data.scn_cnt);
                    setSearchButtonFalse();
                    console.log("🚀 ~ file: page.js:42 ~ page ~ searchButton:", searchButton)
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
                        searchResult.map((item, idx) => (
                            <SearchResult item={item} idx={idx} key={idx}/>
                        ))
                    ) : (
                        <p>검색된 과정이 없습니다.</p>
                    )}
                </div>
                {searchResult.length > 0 ? (
                    <Pagination
                        page={page}
                        setPage={setPage}
                        searchPageCnt={searchPageCnt}
                    />
                ) : (
                    <div></div>
                )}
            </Container>
        </div>
    );
}
