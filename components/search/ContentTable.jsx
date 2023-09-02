// 게시글 상세페이지의 주요 내용을 출력하는 컴포넌트

"use client";

// react
import { useState, useEffect } from "react";
// bootstrap
import Table from "react-bootstrap/Table";
// scss
import './search.scss'

// 게시글의 상세페이지로부터 데이터 받음
export default function ContentTable({ information, id, cnt }) {
    // 수업료 데이트를 숫자 데이터로 변환
    const price = Number(information.perTrco);
    // 수업료 데이터에 쉼표를 붙여서 출력
    const convertedPrice = price.toLocaleString("ko-KR");
    // 서버로부터 받은 수업 데이터를 저장
    const [date, setDate] = useState([]);

    // 서버에 해당 글에 대한 정보를 보내면서 데이터를 요청
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
