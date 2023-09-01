"use client";

import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import "./mainboard.scss";
import TabContent from "./TabContent";
import Title from "../Title";

export default function Board() {
    const [activeTab, setActiveTab] = useState("free");
    const [boardData, setBoardData] = useState([]);

    useEffect(() => {
        const getBoard = async () => {
            try {
                const response = await fetch(
                    `/api/get/mainboard?category=${activeTab}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setBoardData(data.result);
                    // setLoading(false);
                } else {
                    throw new Error("Network response was not ok.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        getBoard();
    }, [activeTab]);

    console.log("🚀 ~ file: Board.jsx:14 ~ Board ~ boardData:", boardData);
    return (
        <div className="board">
            <Title title={'게시판'}/>
            <Tab.Container id="left-tabs-example" defaultActiveKey="free">
                <Row>
                    <Col sm={3} className="category">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="free"
                                    onClick={() => setActiveTab("free")}
                                >
                                    자유
                                </Nav.Link>
                            </Nav.Item>
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
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="portfolio"
                                    onClick={() => setActiveTab("portfolio")}
                                >
                                    포트폴리오
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="question"
                                    onClick={() => setActiveTab("question")}
                                >
                                    질문
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className="tabBody">
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
