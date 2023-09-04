"use client";

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

import AccordionItem from "./AcoordionItem";

import "./accordion.scss";

export default function Accodion() {
    const etc = [
        {
            title: "코드쉐어 (CodeShare.io)",
            content:
                "개발자들이 코드를 공유하고 협업할 수 있는 온라인 코드 에디터 및 협업 플랫폼입니다.",
            link: "https://codeshare.io/",
        },
        {
            title: "로드맵 (Roadmap.sh)",
            content:
                "다양한 개발 분야의 로드맵(학습 경로)을 제공하는 사이트로, 개발자들이 기술 스택을 학습하고 경력을 개발하는 데 도움을 줍니다.",
            link: "https://roadmap.sh/",
        },
        {
            title: "MDN (Mozilla Developer Network)",
            content:
                "웹 기술 및 웹 개발에 관한 정보, 튜토리얼, 레퍼런스를 제공하는 Mozilla의 개발자 네트워크입니다.",
            link: "https://developer.mozilla.org/ko/",
        },
        {
            title: "Stack Overflow",
            content:
                "프로그래머들이 질문을 하고 답변을 얻는 커뮤니티 기반의 Q&A 사이트로, 프로그래밍 관련 문제 해결에 유용합니다.",
            link: "https://stackoverflow.com/",
        },
        {
            title: "개발자 로드맵 (Developer Roadmap by kamranahmedse)",
            content:
                "다양한 기술 스택과 개발 분야에 대한 로드맵을 제공하는 GitHub 프로젝트로, 학습 방향을 제시합니다.",
            link: "https://github.com/kamranahmedse/developer-roadmap",
        },
        {
            title: "Naver D2",
            content:
                "Naver의 개발자 커뮤니티 및 기술 블로그로, 다양한 기술 관련 글과 정보를 제공합니다.",
            link: "https://d2.naver.com/home",
        },
        {
            title: "미리캔버스 (MiriCanvas)",
            content:
                "온라인 그래픽 디자인 및 이미지 편집 툴로, 디자이너들이 그래픽 작업을 할 수 있는 플랫폼입니다.",
            link: "https://www.miricanvas.com/",
        },
    ];

    return (
        <Container>
            <div className="accordionWrap">
                <h3>Etc.</h3>
                <h5>기타</h5>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    {etc.map((item, idx) => {
                        return (
                            <AccordionItem item={item} idx={idx} key={idx} />
                        );
                    })}
                </Accordion>
            </div>
        </Container>
    );
}
