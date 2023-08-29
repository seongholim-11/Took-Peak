import { BiSearchAlt2 } from "react-icons/bi";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useSearchStore from "@/stores/search";
import Link from "next/link";

import './search.scss'

export default function AcademySearch() {
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
