"use client";

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

import AccordionItem from "./AcoordionItem";

import "./accordion.scss";

export default function Accodion() {
    const editor = [
        {
            title: "CodePen",
            content:
                "HTML, CSS, JavaScript를 편집하고 라이브 프리뷰를 볼 수 있는 온라인 코드 에디터입니다. \n다른 개발자와 코드를 공유하고 프로젝트를 협업할 수도 있습니다.",
            link: "https://codepen.io/",
        },
        {
            title: "JSFiddle",
            content:
                "JavaScript 코드를 작성하고 실행할 수 있는 온라인 환경을 제공합니다.\n다양한 JavaScript 라이브러리와 프레임워크를 사용하여 실험할 수 있습니다.",
            link: "https://jsfiddle.net/",
        },
        {
            title: "Glitch",
            content:
                "웹 애플리케이션을 빠르게 만들고 공유할 수 있는 플랫폼입니다.\nNode.js 기반의 프로젝트를 구축하고 호스팅할 수 있습니다.",
            link: "https://glitch.com/",
        },
        {
            title: "Visual Studio Code Online",
            content:
                "Microsoft의 Visual Studio Code를 웹 브라우저에서 사용할 수 있도록 한 온라인 개발 환경입니다.\nVS Code의 강력한 기능을 이용할 수 있습니다.",
            link: "https://visualstudio.microsoft.com/services/visual-studio-online/",
        },
        {
            title: "StackBlitz",
            content:
                "Angular, React, Vue 등의 웹 프레임워크를 사용한 프로젝트를 온라인에서 개발할 수 있는 환경을 제공합니다.",
            link: "https://stackblitz.com/",
        },
        {
            title: "Coder",
            content:
                "원격 개발 환경을 제공하며, 웹 브라우저를 통해 리모트 서버에서 코드를 작성하고 실행할 수 있습니다.",
            link: "https://coder.com/",
        },
    ];
    const ai = [
        {
            title: "ChatGPT",
            content:
                "OpenAI에서 개발한 인공지능 언어모델로, 대화형 인공지능 챗봇입니다.\nChatGPT는 대규모 텍스트 데이터를 학습하여 자연어 이해와 생성 능력을 갖추고 있습니다.",
            link: "https://chat.openai.com/",
        },
        {
            title: "Bard",
            content:
                "구글에서 개발한 인공지능 언어모델로, 대화형 인공지능 챗봇입니다.\nBard는 대규모 텍스트 데이터를 학습하여 자연어 이해와 생성 능력을 갖추고 있으며, 특히 시와 같은 문학적인 글을 생성하는 데에 특화되어 있습니다.",
            link: "https://bard.google.com/",
        },
        {
            title: "CLOVA X",
            content:
                "네이버에서 개발한 인공지능 언어모델로, 대화형 인공지능 챗봇입니다.\nCLOVA X는 대규모 텍스트 데이터를 학습하여 자연어 이해와 생성 능력을 갖추고 있으며, 다양한 분야에서 활용할 수 있습니다.",
            link: "https://clova-x.naver.com/",
        },
        {
            title: "뤼튼",
            content:
                "뤼튼은 AI 기술을 손쉽게 활용할 수 있는 AI 포털입니다.\n뤼튼은 AI 채팅, 이미지 생성, 그리고 나만의 AI를 만들 수 있습니다.",
            link: "https://wrtn.ai/",
        },
    ];
    const algorithm = [
        {
            title: "백준 (Baekjoon Online Judge)",
            content:
                "백준 온라인 저지는 알고리즘 문제를 풀고, 제출하여 해답을 검증할 수 있는 대한민국의 인기 있는 온라인 저지 플랫폼 중 하나입니다.\n프로그래밍 언어에 관계없이 다양한 난이도와 유형의 문제를 제공하며, 사용자들은 문제 풀이를 통해 프로그래밍 및 알고리즘 스킬을 향상시킬 수 있습니다.\n문제 풀이에 대한 통계 정보와 다른 사용자들과의 경쟁 요소를 제공하여 동기부여를 돕습니다.",
            link: "https://www.acmicpc.net/step",
        },
        {
            title: "프로그래머스 (Programmers)",
            content:
                "프로그래머스는 한국의 소프트웨어 역량 강화를 위한 온라인 교육 및 코딩 테스트 준비 플랫폼입니다.\n다양한 프로그래밍 언어 및 기술 스택에 관한 문제와 도전 과제를 제공합니다.\n사용자들은 프로그래머스를 통해 코딩 스킬을 향상하고, 취업을 위한 기술 면접을 준비할 수 있습니다.",
            link: "https://school.programmers.co.kr/learn/challenges?order=recent&languages=javascript",
        },
        {
            title: "리트코드 (LeetCode)",
            content:
                "리트코드는 주로 알고리즘과 데이터 구조 문제를 다루는 국제적으로 인기 있는 온라인 저지 플랫폼입니다.\n다양한 난이도와 주제에 대한 문제를 제공하며, 사용자들은 실제 기술 면접을 위한 연습 및 프로그래밍 스킬을 향상할 수 있습니다.\n리트코드는 프로그래머스와 마찬가지로 취업과 기술 스킬 개발을 위한 중요한 도구로 활용됩니다.",
            link: "https://leetcode.com/",
        },
    ];
    return (
        <Container>
            <div className="accordionWrap">
                <h3>Development</h3>
                <h5>온라인 코드 에디터 및 개발 환경</h5>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    {editor.map((item, idx) => {
                        return <AccordionItem item={item} idx={idx} key={idx}/>;
                    })}
                </Accordion>
                <h5>AI</h5>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    {ai.map((item, idx) => {
                        return <AccordionItem item={item} idx={idx} key={idx}/>;
                    })}
                </Accordion>
                <h5>Algorithm</h5>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    {algorithm.map((item, idx) => {
                        return <AccordionItem item={item} idx={idx} key={idx}/>;
                    })}
                </Accordion>
            </div>
        </Container>
    );
}
