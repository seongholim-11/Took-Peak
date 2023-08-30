"use client";

import LoginUser from "@/components/user/LoginUser";
import NotLoginUser from "@/components/user/NotLoginUser";
import Calender from "./user/Calender";
import AcademySearch from "./search/main/AcademySearch";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useSession } from "next-auth/react";

import Board from "./board/main/Board";
import Box2x1 from "./dev/Box2x1";
import Box1x1 from "./dev/Box1x1";

export default function MainContainer() {
    const box1 = [
        {
            img: "/image/main/dev/security.png",
            title: "개발 팁",
            content: "개발과 취업에 필요한 사이트 및 정보",
        },
        {
            img: "/image/main/dev/location.png",
            title: "개발 기술",
            content: "웹페이지 제작에 유용한 JavaScript, Css 기술",
        },
        {
            img: "/image/main/dev/math.png",
            title: "CS",
            content: "개발을 위한 기초 컴퓨터 지식",
        },
        {
            img: "/image/main/dev/user.png",
            title: "개발 면접",
            content: "기술 면접에 자주 나오는 질문과 답변 모음",
        },
    ];

    // 로그인 유무를 위한 함수
    let session = useSession();
    return (
        <Container>
            <Row className="userWrap">
                <Col lg={7}>
                    {session.data !== null ? <LoginUser /> : <NotLoginUser />}
                </Col>
                <Col lg={5}>
                    <Calender />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AcademySearch />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Board />
                </Col>
            </Row>
            <Row>
                <Col lg={8} md={12} sm={12}>
                    <Box2x1 />
                </Col>
                {box1.map((item, idx) => {
                    return (
                        <Col lg={4} sm={6} key={idx}>
                            <Box1x1 item={item} idx={idx} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
