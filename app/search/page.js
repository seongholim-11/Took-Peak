"use client";

import AcademySearch from "@/components/main/search/AcademySearch";
import React, { useEffect, useState } from "react";

import useSearchStore from "@/stores/search";

export default function page() {
    const {
        searchValue,
        searchButton,
        setSearchButtonFalse,
    } = useSearchStore();
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
                    setSearchResult(data);
                    setSearchButtonFalse();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            };
            if (searchValue) {
            if (searchButton) {
                programSearch();
            }
        }
    }, [searchButton]);
    console.log("🚀 ~ file: page.js:46 ~ page ~ searchButton:", searchButton)
    console.log("🚀 ~ file: page.js:14 ~ page ~ searchValue:", searchValue)
    console.log("🚀 ~ file: page.js:11 ~ page ~ searchResult:", searchResult);
    return (
        <div>
            <AcademySearch />
        </div>
    );
}
