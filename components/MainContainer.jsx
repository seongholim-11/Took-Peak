"use client";

// next
import { useSession } from "next-auth/react";
// components
// user
import LoginUser from "@/components/user/LoginUser";
import NotLoginUser from "@/components/user/NotLoginUser";
import Calender from "./user/Calender";
// search
import AcademySearch from "./search/main/AcademySearch";
// board
import Board from "./board/main/Board";
// dev
import Box2x1 from "./dev/main/Box2x1";
import Box1x1 from "./dev/main/Box1x1";
// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

export default function MainContainer() {
    // dev의 box 내용
    const box1 = [
        {
            img: "/image/main/dev/security.png",
            title: "Development",
            content: "Information related to development and AI",
        },
        {
            img: "/image/main/dev/location.png",
            title: "Study",
            content: "Information related to study",
        },
        {
            img: "/image/main/dev/math.png",
            title: "Employment",
            content: "Information related to employment",
        },
        {
            img: "/image/main/dev/user.png",
            title: "etc.",
            content: "Information to help you develop a program",
        },
    ];

    // 로그인 유무를 위한 함수
    let session = useSession();
    return (
        <Container>
            <Row className="userWrap">
                <Col lg={7}>
                    {/* 로그인 유무에 따라 컴포넌트 바꿔서 출력 */}
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
                            <Link href={`/dev/${item.title}`}><Box1x1 item={item} idx={idx} /></Link>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
