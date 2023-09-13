"use client";

import React from "react";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BiSearchAlt2 } from "react-icons/bi";
import useSearchStore from "@/stores/search";
import "../search.scss";

export default function AcademySearch() {
    const { searchButton, setSearchValue, setSearchButtonTrue, setPage } =
        useSearchStore();

    const handleSearch = () => {
        // 메인페이지에서 검색을 했다는 것을 검색 페이지에 알려주기 위한 state 변화
        setPage(1);
        setSearchButtonTrue();
    };

    return (
        <div className="search">
            <Form>
                <Form.Label htmlFor="search">
                    <BiSearchAlt2 /> Program Search
                </Form.Label>
                <div className="searchInput">
                    <Form.Control
                        type="text"
                        placeholder="Enter the name of the academy"
                        id="search"
                        name="search"
                        onChange={(e) => {
                            setSearchValue(e);
                        }}
                    />
                    <Link href="/search">
                        <Button
                            variant="primary"
                            type="submit" // 버튼을 폼 제출 버튼으로 지정
                            onClick={() => {
                                handleSearch();
                            }}
                            onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleSearch();
                                }
                            }}
                        >
                            SEARCH
                        </Button>
                    </Link>
                </div>
            </Form>
        </div>
    );
}
