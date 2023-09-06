/* portfolio 페이지를 제외한 페이지의 게시판 상세 내용 */

"use client";

// next&react
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
// 부트스트랩
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// react-icons
import { BiArrowBack } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
// scss
import "@/components/board/detail/detail.scss";

// 게시판의 게시글 상세페이지로부터 게시글 정보를 props로 받아옴
export default function Detail({ result }) {
    const router = useRouter();
    function onBackClick() {
        router.back();
    }
    return (
        <Container>
            <div className="boardDetailWrap">
                <div className="prev">
                    {/* 뒤로가기 버튼을 누르면 해당 글의 카테고리 페이지로 이동 */}
                    <Button variant="outline-primary" onClick={onBackClick}>
                        <BiArrowBack />
                    </Button>
                </div>
                <div className="detailWrap">
                    <div className="title">
                        <h1>{result.title}</h1>
                    </div>
                    <div className="info">
                        <div className="creatView">
                            <span className="create">
                                작성일: {result.createdAt}
                            </span>{" "}
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
