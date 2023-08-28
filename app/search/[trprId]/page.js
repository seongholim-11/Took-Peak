"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


import { BiArrowBack } from "react-icons/bi";
import "./searchDetail.scss";
// import Map from "@/components/main/search/Map";
import LoadingTable from "@/components/main/search/LoadingTable";
import ContentTable from "@/components/main/search/ContentTable";

export default function page(props) {
    const id = props.params.trprId;
    const cnt = props.searchParams.trprDegr;

    let [information, setInformation] = useState([]);
    // 로딩 유무
    const [loading, setLoading] = useState(true);

    const getAddress = () => {
        const mapScript = document.createElement("script");

        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services&autoload=false`;

        document.head.appendChild(mapScript);

        var geocoder = new window.kakao.maps.services.Geocoder();

        var callback = function (result, status) {
            console.log("🚀 ~ file: page.js:31 ~ callback ~ status:", status);
            if (status === window.kakao.maps.services.Status.OK) {
                console.log(result);
            }
        };

        if (information.addr1) {
            geocoder.addressSearch(`${information.addr1}`, callback);
        }
    };

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

    console.log(information)
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
                {loading ? <LoadingTable /> : <ContentTable information={information} id={id} cnt={cnt}/>}
            </div>
        </Container>
    );
}
