"use client";

import React from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { BiArrowBack } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";

import "@/components/board/detail/portDetail.scss";

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
                            <span className="create">{result.createdAt}</span>{" "}
                            <RxDotFilled />{" "}
                            <span className="view">view: {result.view}</span>
                        </div>
                        <div className="author">{result.author}</div>
                    </div>
                    <div className="img">
                        <img src={result.image} alt="image" />
                    </div>
                    <div className="content"><p>{result.content}</p></div>
                </div>
            </div>
        </Container>
    );
}
