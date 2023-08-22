"use client";

import LoginUser from "@/components/main/user/LoginUser";
import NotLoginUser from "@/components/main/user/NotLoginUser";
import Calender from "./user/Calender";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useSession } from "next-auth/react";

import "../main/MainContainer.scss";

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
                <Col>2-1</Col>
            </Row>
            <Row>
                <Col>3-1</Col>
            </Row>
            <Row>
                <Col lg={8} md={12} sm={12}>
                    4-1
                </Col>
                <Col lg={4} sm={6}>
                    4-2
                </Col>
                <Col lg={4} sm={6}>
                    4-3
                </Col>
                <Col lg={4} sm={6}>
                    4-4
                </Col>
                <Col lg={4} sm={6}>
                    4-5
                </Col>
            </Row>
            <Row>
                <Col>5-1</Col>
            </Row>
        </Container>
    );
}
