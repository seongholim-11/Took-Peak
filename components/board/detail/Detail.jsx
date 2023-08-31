"use client";

import React from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { usePathname, useSearchParams, useParams } from "next/navigation";

import { BiArrowBack } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";

import "@/components/board/detail/detail.scss";

export default function Detail({ result }) {
    let url = usePathname();
    const parts = url.split("/"); // 문자열을 "/"로 분리하여 배열 생성
    const category = parts[2]; // 카테고리 부분을 추출

    return (
        <Container>
            <div className="wrap">
                <div className="prev">
                    <Link href={`/board/${category}`}>
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
                    <div className="content">
                        <pre>{result.content}</pre>
                    </div>
                </div>
            </div>
        </Container>
    );
}
