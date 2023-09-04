"use client";

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

import AccordionItem from "./AcoordionItem";

import "./accordion.scss";

export default function Accodion() {
    const lecture = [
        {
            title: "생활코딩 (Opentutorials)",
            content:
                "다양한 프로그래밍 언어와 웹 개발 관련 수업 및 강의를 제공하는 한국의 교육 플랫폼입니다.",
            link: "https://opentutorials.org/course/1",
        },
        {
            title: "코딩도장 (Dojang)",
            content:
                "Python을 포함한 다양한 프로그래밍 언어에 대한 무료 학습 자료와 문제를 제공하는 사이트입니다.",
            link: "https://dojang.io/",
        },
        {
            title: "인프런 (Inflearn)",
            content:
                "한국에서 가장 대표적인 온라인 교육 플랫폼 중 하나로, 다양한 IT 및 프로그래밍 강의를 제공합니다.",
            link: "https://www.inflearn.com/",
        },
        {
            title: "노마드코더 (Nomad Coders)",
            content:
                "노마드코더는 웹 개발을 위한 다양한 언어와 기술에 대한 강의를 제공하는 사이트입니다.\n초보자부터 전문가까지 다양한 수준의 사용자들이 이용할 수 있으며, 다양한 예제와 코드를 제공합니다.",
            link: "https://nomadcoders.co/",
        },
        {
            title: "코딩애플 (Coding Apple)",
            content:
                "코딩애플은 초보자들을 위한 프로그래밍 교육 사이트입니다.\n다양한 언어와 주제에 대한 강의를 제공하며, 초보자들이 쉽게 이해할 수 있도록 설명해줍니다.",
            link: "https://codingapple.com/",
        },
        {
            title: "스파르타코딩클럽 (Sparta Coding Club)",
            content:
                "스파르타코딩클럽은 초보자들을 위한 프로그래밍 교육 사이트입니다.\n다양한 언어와 주제에 대한 강의를 제공하며, 초보자들이 쉽게 이해할 수 있도록 설명해줍니다.",
            link: "https://spartacodingclub.kr/",
        },
        {
            title: "패스트캠퍼스 (FastCampus)",
            content:
                "패스트캠퍼스는 다양한 분야의 프로그래밍 강의를 제공하는 사이트입니다. 초보자부터 전문가까지 다양한 수준의 사용자들이 이용할 수 있으며, 다양한 예제와 코드를 제공합니다.",
            link: "https://fastcampus.co.kr/",
        },
        {
            title: "코드잇 (Codeit)",
            content:
                "다양한 프로그래밍 언어와 웹 개발 관련 강의를 제공하는 국내 교육 플랫폼입니다.",
            link: "https://www.codeit.kr/",
        },
        {
            title: "유데미 (Udemy)",
            content:
                "국제적으로 유명한 온라인 교육 플랫폼으로, 다양한 주제와 프로그래밍 언어에 대한 강의를 제공합니다.",
            link: "https://www.udemy.com/",
        },
        {
            title: "코딩알려주는누나 (Coding Noona)",
            content:
                "코딩알려주는누나는 초보자들을 위한 프로그래밍 교육 사이트입니다. 다양한 언어와 주제에 대한 강의를 제공하며, 초보자들이 쉽게 이해할 수 있도록 설명해줍니다.",
            link: "https://codingnoona.thinkific.com/",
        },
        
    ];
    const platforms = [
        {
            title: "w3schools",
            content:
                "웹 개발 및 프로그래밍 언어에 대한 풍부한 자료와 예제를 제공하는 사이트로, HTML, CSS, JavaScript부터 SQL, Python까지 다양한 주제를 다룹니다.",
            link: "https://www.w3schools.com/",
        },
        {
            title: "1분 코딩 (StudioMEAL)",
            content:
                "짧고 간결한 코드 스니펫과 프로그래밍 지식을 제공하는 사이트로, 초보자부터 중급자까지 다양한 수준의 내용을 다룹니다.",
            link: "https://studiomeal.com/",
        },
        {
            title: "Boostcourse",
            content:
                "KAIST와 함께 제공하는 온라인 교육 플랫폼으로, 컴퓨터 과학과 관련 강의를 제공합니다.",
            link: "https://www.boostcourse.org/",
        },
        {
            title: "Groom EDU",
            content:
                "온라인 코딩 교육을 제공하는 플랫폼으로, 다양한 프로그래밍 언어 및 주제에 대한 강의를 제공합니다.",
            link: "https://edu.goorm.io/category/programming",
        },
        {
            title: "프로그래머스 (Programmers)",
            content:
                "프로그래머스는 프로그래밍 및 알고리즘 관련 강의와 문제 풀이 플랫폼으로, 대한민국에서 인기 있는 교육 플랫폼 중 하나입니다.",
            link: "https://programmers.co.kr/learn/",
        },
        {
            title: "Code Cademy",
            content:
                "다양한 프로그래밍 언어와 기술에 대한 대화형 학습을 제공합니다.",
            link: "https://www.codecademy.com/catalog/all",
        },
    ];

    return (
        <Container>
            <div className="accordionWrap">
                <h3>Employment</h3>
                <h5>온라인 교육 플랫폼과 자료</h5>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    {platforms.map((item, idx) => {
                        return (
                            <AccordionItem item={item} idx={idx} key={idx} />
                        );
                    })}
                </Accordion>
                <h5>온라인 강의</h5>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    {lecture.map((item, idx) => {
                        return (
                            <AccordionItem item={item} idx={idx} key={idx} />
                        );
                    })}
                </Accordion>
            </div>
        </Container>
    );
}
