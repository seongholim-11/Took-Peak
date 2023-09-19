"use client";

import UserInf from "./UserInf";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./mypage.scss";
import Contents from "./Contents";
import Comments from "./Comments";

export default function Mypage() {
    return (
        <Container>
            <div className="gridWrap">
                <Row>
                    <Col className="userInf">
                        <div className="title">유저 정보</div>
                        <UserInf />
                    </Col>
                </Row>
                <Row>
                    <Col className="contents">
                        <Contents />
                    </Col>
                    <Col className="comments">
                        <Comments />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
