/* 게시판 portfolio 페이지 게시글 상세 내용 */
"use client";

// next&react
import React from "react";
import Link from "next/link";
// 부트스트랩
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// react-icons
import { BiArrowBack } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
// scss
import "@/components/board/detail/portDetail.scss";

// 게시판의 게시글 상세페이지로부터 게시글 정보를 props로 받아옴
export default function Detail({ result }) {

    return (
        <Container>
            <div className="wrap">
                <div className="prev">
                    <Link href="/board/portfolio">
                        <Button variant="outline-primary">
                            <BiArrowBack />
                        </Button>
                    </Link>
                </div>
                <div className="detailWrap">
                    <div className="title">
                        <h1>{result.title}</h1>
                    </div>
                    <div className="info">
                        <div className="creatView">
                            <span className="create">작성일: {result.createdAt}</span>{" "}
                            <RxDotFilled />{" "}
                            <span className="view">조회수: {result.view}</span>
                        </div>
                        <div className="author">글쓴이: {result.author}</div>
                    </div>
                    <div className="img">
                        <img src={result.image} alt="image" />
                    </div>
                    <div className="content"><pre>{result.content}</pre></div>
                </div>
            </div>
        </Container>
    );
}
