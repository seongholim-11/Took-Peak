"use client";

import UserInf from "./UserInf";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./mypage.scss";
import Contents from "./Contents";

export default function Mypage() {
    return (
        <Container>
            <div className="gridWrap">
                <Row>
                    <Col className="userInf">
                        <UserInf />
                    </Col>
                </Row>
                <Row>
                    <Col className="contents">
                        <Contents />
                    </Col>
                    <Col className="comments">2 of 2</Col>
                </Row>
            </div>
        </Container>
    );
}
