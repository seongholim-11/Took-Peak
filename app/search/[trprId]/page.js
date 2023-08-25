"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { BiArrowBack } from "react-icons/bi";
import "./searchDetail.scss";
import Map from "@/components/main/search/Map";

export default function page(props) {
    const id = props.params.trprId;
    const cnt = props.searchParams.trprDegr;

    let [information, setInformation] = useState([])

    useEffect(() => {
        const programDetail = async () => {
            fetch("/api/post/searchDetail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, cnt }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Network response was not ok.");
                    }
                })
                .then((data) => {
                    setInformation(data.inst_base_info)
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        };

        programDetail();
    }, []);

    return (
        <Container>
            <div className="searchDetail">
                <div className="btnWrap">
                    <Link href="/search">
                        <Button variant="outline-primary">
                            <BiArrowBack />
                        </Button>
                    </Link>
                </div>
                <div>
                    <Map addr1={information.addr1}/>
                </div>
            </div>
        </Container>
    );
}
