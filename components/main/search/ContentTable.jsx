"use client";

import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

import './search.scss'

export default function ContentTable({ information, id, cnt }) {
    const price = Number(information.perTrco);
    const convertedPrice = price.toLocaleString("ko-KR");

    const [date, setDate] = useState([]);

    useEffect(() => {
        const searchDate = async () => {
            fetch("/api/post/searchDate", {
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
                    setDate(data[0]);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        };

        searchDate();
    }, []);

    return (
        <div className="detail">
            <h2>{`${information.trprNm}(${information.trprDegr})`}</h2>
            <div className="content">
                <Table bordered hover>
                    <tbody>
                        <tr>
                            <td>주소</td>
                            <td>{`${information.addr1} (${information.addr2})`}</td>
                        </tr>
                        <tr>
                            <td>홈페이지</td>
                            <td>
                                <a
                                    href={`${information.hpAddr}`}
                                    target="_blank"
                                >
                                    {information.hpAddr}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> NCS 직무분류</td>
                            <td>
                                {`${information.ncsNm}(${information.ncsCd})`}
                            </td>
                        </tr>
                        <tr>
                            <td> NCS 적용여부</td>
                            <td>
                                {information.ncsYn === "Y" ? "적용" : "미적용"}
                            </td>
                        </tr>
                        <tr>
                            <td>담당자 성명</td>
                            <td>{information.trprChap}</td>
                        </tr>
                        <tr>
                            <td>담당자 이메일</td>
                            <td>{information.trprChapEmail}</td>
                        </tr>
                        <tr>
                            <td>담당자 전화번호</td>
                            <td>{information.trprChapTel}</td>
                        </tr>
                        <tr>
                            <td> 훈련기간</td>
                            <td>{`${date.trStaDt} ~ ${date.trEndDt}`}</td>
                        </tr>
                        <tr>
                            <td> 훈련비</td>
                            <td>{convertedPrice}원</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
