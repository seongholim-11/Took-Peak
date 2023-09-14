/* 게시판 portfolio 페이지 게시글 상세 내용 */
"use client";

// next&react
import React from "react";
// 부트스트랩
import Container from "react-bootstrap/Container";
// react-icons
import { RxDotFilled } from "react-icons/rx";
// scss
import "@/components/board/detail/portDetail.scss";
import Back from "./Back";

// 게시판의 게시글 상세페이지로부터 게시글 정보를 props로 받아옴
export default function Detail({ result }) {
    let createdAt = result.createdAt.substr(0, 10);
    return (
        <Container>
            <div className="wrap">
                <Back result={result} />
                <div className="detailWrap">
                    <div className="title">
                        <h1>{result.title}</h1>
                    </div>
                    <div className="info">
                        <div className="creatView">
                            <span className="create">작성일: {createdAt}</span>{" "}
                            <RxDotFilled />{" "}
                            <span className="view">
                                조회수: {result.view + 1}
                            </span>
                        </div>
                        <div className="author">글쓴이: {result.author}</div>
                    </div>
                    <div className="img">
                        <img src={result.image} alt="image" />
                    </div>
                    <div className="content">
                        <pre>{result.content}</pre>
                    </div>
                </div>
            </div>
        </Container>
    );
}
