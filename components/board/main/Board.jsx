/* 메인페이지의 board 컴포넌트 */
"use client";

// react
import React, { useState, useEffect } from "react";
// components
import TabContent from "./TabContent";
import Title from "../Title";
// bootstrap
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
// react-icons
import { FaExternalLinkAlt } from "react-icons/fa";
// scss
import "./mainboard.scss";
import Link from "next/link";

export default function Board() {
    // 누른 탭메뉴가 무엇인지 저장하는 state
    const [activeTab, setActiveTab] = useState("free");
    // 서버와 DB로부터 3개씩 받아오는 카테고리별 게시글
    const [boardData, setBoardData] = useState([]);

    // 서버에 선태된 카테고리 게시글 3개 요청하기
    useEffect(() => {
        const getBoard = async () => {
            try {
                const response = await fetch(
                    `/api/get/mainboard?category=${activeTab}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setBoardData(data.result);
                } else {
                    throw new Error("Network response was not ok.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        getBoard();
        // 사용자가 탭을 눌러 카테고리가 바뀔 때마다 get 요청
    }, [activeTab]);

    return (
        <div className="board">
            <Title title={"게시판"} activeTab={activeTab} />
            <Tab.Container id="left-tabs-example" defaultActiveKey="free">
                <Row>
                    <Col sm={3} className="category">
                        <Nav variant="pills" className="flex-column">
                            <div className="category-flex">
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="free"
                                        onClick={() => setActiveTab("free")}
                                    >
                                        자유
                                    </Nav.Link>
                                </Nav.Item>
                                <Link href={'/board/free'}>
                                    <Button variant="outline-primary">
                                        <FaExternalLinkAlt/>
                                    </Button>
                                </Link>
                            </div>
                            <div className="category-flex">
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="collaboration"
                                        onClick={() =>
                                            setActiveTab("collaboration")
                                        }
                                    >
                                        협업
                                    </Nav.Link>
                                </Nav.Item>
                                <Link href={'/board/collaboration'}>
                                    <Button variant="outline-primary">
                                        <FaExternalLinkAlt/>
                                    </Button>
                                </Link>
                            </div>
                            <div className="category-flex">
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="portfolio"
                                        onClick={() =>
                                            setActiveTab("portfolio")
                                        }
                                    >
                                        포트폴리오
                                    </Nav.Link>
                                </Nav.Item>
                                <Link href={'/board/portfolio'}>
                                    <Button variant="outline-primary">
                                        <FaExternalLinkAlt/>
                                    </Button>
                                </Link>
                            </div>
                            <div className="category-flex">
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey="question"
                                        onClick={() => setActiveTab("question")}
                                    >
                                        질문
                                    </Nav.Link>
                                </Nav.Item>
                                <Link href={'/board/question'}>
                                    <Button variant="outline-primary">
                                        <FaExternalLinkAlt/>
                                    </Button>
                                </Link>
                            </div>
                        </Nav>
                    </Col>
                    <Col className="tabBody">
                        {/* 탭 내용을 보여주는 자식 컴포넌트에 선택된 카테고리와 해당 데이터 Props로 넘겨주기 */}
                        <Tab.Content>
                            <Tab.Pane eventKey="free">
                                <TabContent
                                    boardData={boardData}
                                    activeTab={activeTab}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="collaboration">
                                <TabContent
                                    boardData={boardData}
                                    activeTab={activeTab}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="portfolio">
                                <TabContent
                                    boardData={boardData}
                                    activeTab={activeTab}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="question">
                                <TabContent
                                    boardData={boardData}
                                    activeTab={activeTab}
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}
