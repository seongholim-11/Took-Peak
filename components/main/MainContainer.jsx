"use client";

import LoginUser from "@/components/main/user/LoginUser";
import NotLoginUser from "@/components/main/user/NotLoginUser";
import Calender from "./user/Calender";
import AcademySearch from "./search/AcademySearch";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useSession } from "next-auth/react";

import "../main/MainContainer.scss";
import Board from "./board/board";
import Box2x1 from "./dev/Box2x1";
import Box1x1 from "./dev/Box1x1";

export default function MainContainer() {
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
                <Col lg={4} sm={6}>
                    <Box1x1 />
                </Col>
                <Col lg={4} sm={6}>
                    <Box1x1 />
                </Col>
                <Col lg={4} sm={6}>
                    <Box1x1 />
                </Col>
                <Col lg={4} sm={6}>
                    <Box1x1 />
                </Col>
            </Row>
            <Row>
                <Col>5-1</Col>
            </Row>
        </Container>
    );
}
