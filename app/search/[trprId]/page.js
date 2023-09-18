"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { BiArrowBack } from "react-icons/bi";
import "./searchDetail.scss";
// import Map from "@/components/main/search/Map";
import LoadingTable from "@/components/search/LoadingTable";
import ContentTable from "@/components/search/ContentTable";
import Comment from "@/components/search/Comment";

export default function page(props) {
    const id = props.params.trprId;
    const cnt = props.searchParams.trprDegr;

    let [information, setInformation] = useState([]);
    console.log("🚀 ~ file: page.js:22 ~ page ~ information:", information)
    // 로딩 유무
    const [loading, setLoading] = useState(true);

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
                        setLoading(false);
                        return response.json();
                    } else {
                        throw new Error("Network response was not ok.");
                    }
                })
                .then((data) => {
                    setInformation(data.inst_base_info);
                    // getAddress();
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
                <div>{/* <Map addr1={information.addr1} /> */}</div>
                {loading ? (
                    <LoadingTable />
                ) : (
                    <ContentTable information={information} id={id} cnt={cnt} />
                )}
                <Comment id={id} cnt={cnt} title={information.trprNm}/>
            </div>
        </Container>
    );
}
