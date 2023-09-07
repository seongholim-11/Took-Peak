// react&next
import React from "react";
import Link from "next/link";
// components
import KakaoQR from './KakaoQR'
// bootstrap
import Container from "react-bootstrap/Container";
// react-icon
import { AiOutlineMail } from "react-icons/ai"; 
import { SiTistory } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaMountain } from "react-icons/fa";
// scss
import "./footer.scss";

export default function Footer() {
    return (
        <Container>
            <div className="footerWrap">
                <div className="column1">
                    <div className="logo">
                        <FaMountain />
                        Took-Peak
                    </div>

                    <p className="copyright">Copyright © 2023 Took-peak</p>
                </div>
                <div className="column2">
                    <div className="category">
                        <Link href={"/tookpeak"} className="menu">
                            Took-Peak
                        </Link>
                        <Link href={"/tookpeak"} className="submenu">
                            Took-Peak
                        </Link>
                        <Link href={"/notice"} className="submenu">
                            Notice
                        </Link>
                    </div>
                    <div className="category">
                        <Link href={"/search"} className="menu">
                            Search
                        </Link>
                        <Link href={"/search"} className="submenu">
                            학원 검색
                        </Link>
                    </div>
                    <div className="category">
                        <Link href={"/board/free"} className="menu">
                            Message Board
                        </Link>
                        <Link href={"/board/free"} className="submenu">
                            자유게시판
                        </Link>
                        <Link href={"/board/collaboration"} className="submenu">
                            협업게시판
                        </Link>
                        <Link href={"/board/portfolio"} className="submenu">
                            포트폴리오 게시판
                        </Link>
                        <Link href={"/board/question"} className="submenu">
                            질문 게시판
                        </Link>
                    </div>
                    <div className="category">
                        <Link href={"/dev/Development"} className="menu">
                        About Dev
                        </Link>
                        <Link href={"/dev/Development"} className="submenu">
                        Development
                        </Link>
                        <Link href={"/dev/Study"} className="submenu">
                        Study
                        </Link>
                        <Link href={"/dev/Employment"} className="submenu">
                        Employment
                        </Link>
                        <Link href={"/dev/etc"} className="submenu">
                            etc
                        </Link>
                    </div>
                    <div className="connect">
                        <p>connect</p>
                        <KakaoQR/>
                        <Link
                            href={"https://github.com/seongholim-11/took-peak"}
                            target="_blank"
                        >
                            <AiFillGithub />
                        </Link>
                        <Link
                            href={"https://limseongjang.tistory.com/"}
                            target="_blank"
                        >
                            <SiTistory />
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}
