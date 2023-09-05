"use client";

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

import AccordionItem from "./AcoordionItem";

import "./accordion.scss";

export default function Accodion() {
    const employment = [
        {
            title: "원티드 (Wanted)",
            content:
                "원티드는 한국의 채용 정보 플랫폼으로, 다양한 분야와 직종의 구인 정보를 제공합니다.\n기업의 채용 정보뿐만 아니라 스타트업 정보와 기업 리뷰도 확인할 수 있습니다.",
            link: "https://www.wanted.co.kr/jobsfeed",
        },
        {
            title: "잡코리아 (JobKorea)",
            content:
                "잡코리아는 한국의 대표적인 취업 포털 사이트 중 하나로, 다양한 기업의 채용 정보를 제공하며 이력서 작성 및 채용 공고 검색 등 다양한 기능을 제공합니다.",
            link: "https://www.jobkorea.co.kr/",
        },
        {
            title: "잡플래닛 (Jobplanet)",
            content:
                "잡플래닛은 기업 정보와 채용 정보를 제공하는 사이트로, 구직자들이 기업에 대한 리뷰를 남기고 기업 분위기 등을 확인할 수 있습니다.",
            link: "https://www.jobplanet.co.kr/job",
        },
        {
            title: "사람인 (Saramin)",
            content:
                "사람인은 한국의 채용 정보 포털 사이트로, 다양한 채용 공고와 구직자 서비스를 제공합니다.\n이력서 작성과 채용 공고 등을 확인할 수 있습니다.",
            link: "https://www.saramin.co.kr/zf_user/",
        },
        {
            title: "점핏 (Jumpit)",
            content:
                "점핏은 IT 분야에 특화된 채용 플랫폼입니다.\n기업과 인재를 연결해주며, 다양한 채용 정보와 취업 관련 서비스를 제공합니다.",
            link: "https://www.jumpit.co.kr/",
        },
        {
            title: "로켓펀치 (RocketPunch)",
            content:
                "로켓펀치는 한국의 스타트업 및 테크 기업 채용 정보를 제공하는 사이트로, 스타트업 관련 채용 정보와 이력서 등록 기능을 제공합니다.",
            link: "https://www.rocketpunch.com/",
        },
        {
            title: "워크넷 (Worknet)",
            content:
                "워크넷은 한국 고용노동부가 운영하는 공공 취업 정보 플랫폼으로, 다양한 공공기관 및 민간 기업의 채용 정보를 제공하고 고용 관련 정보를 제공합니다.",
            link: "https://www.work.go.kr/",
        },
        {
            title: "인크루트 (Incruit)",
            content:
                "인크루트는 국내 대표적인 채용 플랫폼 중 하나입니다.\n기업과 인재를 연결해주며, 다양한 채용 정보와 취업 관련 서비스를 제공합니다.",
            link: "https://www.incruit.com/",
        },
        {
            title: "나라일터",
            content:
                "나라일터는 한국 공공기관 채용 정보를 제공하는 사이트로, 정부 및 지자체 기관의 채용 정보와 시험 일정 등을 확인할 수 있습니다.",
            link: "https://www.gojobs.go.kr/",
        },
        {
            title: "코딩어네리 (Codenary)",
            content:
                "한국의 소프트웨어 개발 기업 및 IT 회사 목록을 제공하는 웹사이트로, 채용 정보와 회사 정보를 확인할 수 있습니다.",
            link: "https://www.codenary.co.kr/company/list",
        },
    ];
    const interview = [
        {
            title: "Interview_Question_for_Beginner (GitHub 저장소)",
            content:
                "이 저장소는 개발자 및 프로그래밍 입문자들을 위한 면접 질문 및 답변 모음집입니다.\n면접 준비를 위한 다양한 주제와 질문이 포함되어 있습니다.",
            link: "https://github.com/JaeYeopHan/Interview_Question_for_Beginner",
        },
        {
            title: "tech-interview-for-developer (GitHub 저장소)",
            content:
                "이 저장소는 소프트웨어 개발자를 위한 기술 면접 질문과 답변을 제공합니다.\n주로 Java, JavaScript, Python 등 다양한 프로그래밍 언어와 기술 스택에 관한 내용을 다룹니다.",
            link: "https://github.com/gyoogle/tech-interview-for-developer/tree/master",
        },
        {
            title: "gyoogle.dev (블로그)",
            content:
                "이 블로그는 기술 면접 질문 및 프로그래밍 관련 정보를 다루는 것으로 알려져 있습니다.\n블로그 포스트에서는 다양한 주제에 대한 기술적인 내용과 팁을 제공합니다",
            link: "https://gyoogle.dev/blog/",
        },
        {
            title: "TechnicalNote (GitHub 저장소)",
            content:
                "이 저장소에는 다양한 기술 관련 노트 및 자료가 포함되어 있습니다.\n주로 프로그래밍 언어, 데이터베이스, 네트워킹, 운영체제 등의 주제를 다룹니다.",
            link: "https://github.com/jobhope/TechnicalNote",
        },
        ,
        {
            title: "tech-interview (GitHub 저장소)",
            content:
                "이 저장소는 기술 면접을 위한 자료를 제공하는 것으로 알려져 있습니다.\n자바 기반의 기술 스택 및 프레임워크와 관련된 내용을 다룹니다.",
            link: "https://github.com/WeareSoft/tech-interview",
        },
        {
            title: "Must-Know-About-Frontend (GitHub 저장소)",
            content:
                "이 저장소는 프런트엔드 개발자를 위한 기술적인 정보와 리소스를 제공합니다.\n웹 개발과 관련된 주제를 중점적으로 다룹니다.",
            link: "https://github.com/baeharam/Must-Know-About-Frontend",
        },
        {
            title: "기술 면접 질문 모음 (Velog 블로그)",
            content:
                "이 Velog 블로그에는 다양한 기술 면접 질문과 관련된 내용이 포함되어 있습니다.\n프로그래밍 언어, 알고리즘, 데이터베이스 등의 주제가 다루어집니다.",
            link: "https://velog.io/@hygoogi/%EA%B8%B0%EC%88%A0-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8-%EB%AA%A8%EC%9D%8C",
        },
    ];
    const portfolio = [
        {
            title: "드리블 (Dribbble)",
            content:
                "드리블은 디자이너와 크리에이터들이 자신의 작업물을 공유하고 시각적인 아이디어를 공유하는 커뮤니티 플랫폼입니다.\n웹 디자인, 그래픽 디자인, 일러스트레이션 등 다양한 디자인 관련 작품을 찾아볼 수 있습니다.",
            link: "https://dribbble.com/",
        },
        {
            title: "비한스 (Behance)",
            content:
                "비한스는 크리에이터와 디자이너들이 자신의 작품을 전시하고 공유하는 플랫폼입니다.\n포트폴리오를 만들고 다른 크리에이터들의 작업물을 찾아볼 수 있으며, 다양한 디자인 분야를 탐험할 수 있습니다.",
            link: "https://www.behance.net/",
        },
        {
            title: "핀터레스트 (Pinterest)",
            content:
                "핀터레스트는 이미지 및 아이디어 공유 플랫폼으로, 사용자들은 다양한 주제와 관심사에 대한 이미지, 아이디어, 레시피, 패션 등을 찾아보고 저장할 수 있습니다.",
            link: "https://www.pinterest.co.kr/",
        },
        {
            title: "99designs",
            content:
                "99designs는 디자인 경쟁 플랫폼으로, 다양한 디자인 프로젝트를 게시하고 디자이너들로부터 창의적인 디자인 아이디어를 받을 수 있습니다.\n로고, 웹사이트, 패키지 디자인 등 다양한 디자인 카테고리가 있습니다.",
            link: "https://99designs.com/",
        },
        {
            title: "노트폴리오 (Notefolio)",
            content:
                "노트폴리오는 다양한 창작물과 아이디어를 공유하는 플랫폼으로, 글쓰기, 일러스트레이션, 포트폴리오, 웹소설 등 다양한 창작물을 업로드하고 공유할 수 있습니다.",
            link: "https://notefolio.net/",
        },
        {
            title: "그라폴리오 (Grafolio)",
            content:
                "그라폴리오는 한국의 일러스트레이터와 아티스트들이 자신의 작품을 공유하고 판매하는 플랫폼입니다.",
            link: "https://grafolio.naver.com/works/list.grfl",
        },
        {
            title: "아트스테이션 (ArtStation)",
            content:
                "아트스테이션은 주로 게임, 영화, 애니메이션 등의 업계에서 활동하는 아티스트와 디자이너들이 자신의 작품을 전시하고 공유하는 플랫폼입니다.",
            link: "https://www.artstation.com/?sort_by=community&dimension=all",
        },
        {
            title: "개발자 포트폴리오 작성에 관한 블로그 글 (Medium)",
            content:
                "포트폴리오 작성에 대한 기본적인 개념과 구성 방법, 자신의 경력과 역량을 효과적으로 보여주는 방법 등을 소개하고 있습니다.\n또한, 개발자로서 성장하기 위한 다양한 팁과 정보도 제공하고 있습니다.",
            link: "https://medium.com/오일나우-팀-블로그/주니어-개발자가-포트폴리오를-준비할-때-알아두면-좋은-것들-ac5304a9ecb9",
        },
    ];
    return (
        <Container>
            <div className="accordionWrap">
                <h3>Employment</h3>
                <h5>채용</h5>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    {employment.map((item, idx) => {
                        return (
                            <AccordionItem item={item} idx={idx} key={idx} />
                        );
                    })}
                </Accordion>
                <h5>면접/CS</h5>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    {interview.map((item, idx) => {
                        return (
                            <AccordionItem item={item} idx={idx} key={idx} />
                        );
                    })}
                </Accordion>
                <h5>포트폴리오/레퍼런스</h5>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    {portfolio.map((item, idx) => {
                        return (
                            <AccordionItem item={item} idx={idx} key={idx} />
                        );
                    })}
                </Accordion>
            </div>
        </Container>
    );
}
