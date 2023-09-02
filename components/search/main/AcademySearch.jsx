// react&next
import React from "react";
import Link from "next/link";
// bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// react-icons
import { BiSearchAlt2 } from "react-icons/bi";
// zustand store
import useSearchStore from "@/stores/search";
// scss
import '../search.scss'

export default function AcademySearch() {
    // 메인페이지에서 검색하면
    // 
    const { searchButton, setSearchValue, setSearchButtonTrue } =
        useSearchStore();

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
                            onClick={() => {
                                // 메인페이지에서 검색을 했다는 것을 검색 페이지에 알려주기 위한 state 변화
                                setSearchButtonTrue(searchButton);
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
